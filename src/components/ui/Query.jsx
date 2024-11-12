import React from "react";

import { useToast } from "../../hooks/use-toast"
import { Text } from "./Text";

const Query = ()=>{
    const { toast } = useToast();

    const placeholders = [
        "Ask us something"
      ];
     
      const handleChange = (e) => {
        console.log(e.target.value);
      };
      const onSubmit = (e) => {
        console.log("here");
        toast({
            title: "Sending your query",
            description: "We will respond via our FAQs",
          })
      };
    return(
        <>
        <div className="h-[10rem] flex flex-col justify-center items-center px-4">
        <Text
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        />
        </div>
        </>
    )
}

export default Query;