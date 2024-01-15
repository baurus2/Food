import { useState } from "react"

export const useInput = () => {
  const [selectedValue, setSelectedValue] = useState("")

  const changeSelectedValue = (e) => {
    setSelectedValue(e.target.value)
  };

  return [selectedValue, changeSelectedValue]
}
