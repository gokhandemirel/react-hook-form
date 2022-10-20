export default function Button({ children, ...props }) {
    return (
        <a className={`px-[20px] py-[10px] bg-white rounded-[8px] text-slate-700 cursor-pointer`} {...props}>
            {children}
        </a>
    );
}