"use client"


interface PropType {
    placeholder: string;
    size: "big" | "small";
    onChange: any;
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TextInput(
    {placeholder,
        size,
        onChange
}: PropType) {
    return <input onChange={onChange} type="text" placeholder={placeholder} 
            style={{
                padding: size === "big" ? 20:10,
                margin: size === "big" ? 20:10,
                borderColor:"black",
                borderWidth: 1
            }}></input>
}