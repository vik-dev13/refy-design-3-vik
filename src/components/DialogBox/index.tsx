/** @format */

import * as React from "react";
import { createPortal } from "react-dom";

export interface IDialogBoxProps {
	title?: string;
	open: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
}

export default function DialogBox({
	title,
	open,
	setIsOpen,
	children,
}: IDialogBoxProps) {
	const myDivRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				myDivRef.current &&
				!myDivRef?.current?.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [myDivRef]);

	if (!open) return null;

	return createPortal(
		<>
			<div
				ref={myDivRef}
				className="fixed z-1000 bg-[#2a2a2a] md:left-[20%]  top-[8%] md:top-[20%] rounded-lg  min-w-[90%] min-h-[50vh] md:!min-w-[80vh] p-4 text-white mx-[5%]"
			>
				<div className="flex flex-col gap-4">
					<div className="flex flex-row justify-between px-2">
						<div className="font-semibold text-[22px] md:text-[28px]">
							{title ?? ""}
						</div>
						<button onClick={() => setIsOpen(false)}>
							<p className="font-[700]">X</p>
						</button>
					</div>
					<div>{children}</div>
				</div>
			</div>
		</>,
		document.body,
	);
}
