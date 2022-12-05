function Row({ size }) {
    if (size == 0) return;
    let elements = [];
    for (let index = 0; index < size; index++)
        elements.push(<div className="relative rounded-full bg-[#42b883] w-16 h-16 -m-2 flex justify-center items-center" />)
    return (
        <>
            <Row size={size - 1} />
            <div className="flex flex-row justify-center">
                {elements}
            </div>
        </>
    )
}

function ChristmasTree({ size }) {
    return <div>
        <Row size={7} />
    </div>
}

export { ChristmasTree }
