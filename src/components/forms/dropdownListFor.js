import Select from "react-select";
import { Controller } from "react-hook-form";

export default function DropdownListFor({ searchPlaceholder, noOptionsMessage, register, errors, control, data, onChangeCustom }) {
    return (
        <Controller
            name={register.name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Select
                {...field}
                instanceId={register.name}
                className={`${errors[register.name] ? `validate` : ``}`}
                options={data}
                placeholder={searchPlaceholder}
                noOptionsMessage={() => (noOptionsMessage)}
                isClearable={true}
                value={data.find((x) => x.value === field.value)}
                onChange={(e) => {
                    field.onChange(e);
                    onChangeCustom && onChangeCustom(e)
                }}
            />}
        />
    )
}