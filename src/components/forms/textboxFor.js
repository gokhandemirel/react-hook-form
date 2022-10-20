export default function TextboxFor({ register, errors, ...props }) {
    return (
        <input
            {...props}
            {...register}
            id={register.name}
            type="text"
            className={`px-[10px] py-[7px] bg-white rounded-[4px] outline-none ${errors[register.name] ? `  !placeholder-red-500` : ``} `}
            autoComplete="off"
        />
    )
}