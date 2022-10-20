import { useForm } from 'react-hook-form';
import TextboxFor from '../forms/textboxFor';
import DropdownListFor from '../forms/dropdownListFor';
import Button from '../forms/button';
import ValidationFor from '../forms/validationFor';
import { useState } from 'react';

export default function HookForm() {

    const { handleSubmit, register, control, formState: { errors } } = useForm();
    const [formData, setFormData] = useState([]);

    const onSubmit = (data) => {
        setFormData(data);
    }

    return (
        <div className="flex justify-center">
            <form className="flex flex-col items-center gap-[12px] p-14 w-full lg:w-[400px]">
                <h1 className="text-[22px] text-white">React Hook Form</h1>
                <fieldset className="flex flex-col w-full">
                    <TextboxFor register={register("name", { required: true })} errors={errors} placeholder="Name Surname" />
                    <ValidationFor name="name" title="This field is required." errors={errors} />
                </fieldset>
                <fieldset className="flex flex-col w-full">
                    <TextboxFor register={register("email", {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid e-mail address",
                        },
                    })}
                        errors={errors}
                        placeholder="E-mail"
                    />
                    <ValidationFor name="email" title="This field is required." errors={errors} />
                </fieldset>
                <fieldset className="flex flex-col w-full">
                    <DropdownListFor
                        register={register("country", { required: true })}
                        data={[{ label: "İstanbul", value: 1 }]}
                        errors={errors}
                        control={control}
                        searchPlaceholder="Country"
                        noOptionsMessage="Not found"
                    />
                    <ValidationFor name="country" title="This field is required." errors={errors} />
                </fieldset>
                <fieldset className="flex">
                    <Button onClick={handleSubmit(onSubmit)}>Gönder</Button>
                </fieldset>
                <pre className="flex flex-col w-full whitespace-normal p-6 bg-slate-800 text-white mt-6 rounded-[8px]">
                    <span>Name Surname: {formData.name}</span>
                    <span>E-mail: {formData.email}</span>
                    <span>Country: {formData.country?.label}</span>
                </pre>
            </form>
        </div>
    );
}