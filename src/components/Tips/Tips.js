import { useState } from "react";
import Button from "../Button";

const Tips = () => {
    const tips = [
        "Wash synthetic wigs every 6–8 wears.",
        "Store wigs on a stand to keep their shape.",
        "Avoid heat on synthetic wigs."
    ];

    const [index, setIndex] = useState(0);

    return (
        <div>
            <p>{tips[index]}</p>

            <Button
                text="Next tip"
                onClick={() => setIndex((index + 1) % tips.length)}
            />
        </div>
    );
};

export default Tips;
