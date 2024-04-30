/** @format */

import React from "react";

interface InputProps {
	name: string;
	value: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
}

const Input = ({ name, value, onChange }: InputProps) => {
	return (
		<input
			type="text"
			value={value}
			onChange={onChange}
			name={name}
			className="bg-[transparent] border border-white py-2 rounded-[12px] px-3"
		/>
	);
};

const ContactUsForm = () => {
	const [formData, setFormData] = React.useState<{} | any>({});
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		let inputName = e.target?.name;
		let value = e.target?.value;
		setFormData({ ...formData, [inputName]: value });
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col md:flex-row gap-3">
				<div className="flex flex-col gap-2 md:w-[50%]">
					<p>Name</p>
					<Input
						name="name"
						value={formData?.name || ""}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="flex flex-col gap-2 md:w-[50%]">
					<p>Email</p>
					<Input
						name="email"
						value={formData?.email || ""}
						onChange={(e) => handleChange(e)}
					/>
				</div>
			</div>
			{/* -------------------- ------------------------------ */}
			<div className="flex flex-col md:flex-row gap-3">
				<div className="flex flex-col gap-2 md:w-[50%]">
					<p>Phone</p>
					<Input
						name="phone"
						value={formData?.phone || ""}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="flex flex-col gap-2 md:w-[50%]">
					<p>Company</p>
					<Input
						name="company"
						value={formData?.company || ""}
						onChange={(e) => handleChange(e)}
					/>
				</div>
			</div>
			<div className="flex flex-col">
				<p>Message</p>
				<textarea
					name="message"
					rows={5}
					value={formData?.message || ""}
					onChange={(e) => handleChange(e)}
					className="bg-[transparent] border border-white py-2 rounded-[12px] px-3"
				></textarea>
			</div>
			<div className="w-full flex flex-row justify-end ">
				<button className="bg-green-primary rounded-[100px] px-4 py-3 text-black w-[40%]">
					Submit
				</button>
			</div>
		</div>
	);
};

export default ContactUsForm;
