import React from "react";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";

const CustomSwitchInput = ({switchValue,setSwitchValue}) => {
  return (
    <div className="flex items-center justify-between border-2 rounded-4xl px-2">
      <Input
        type="text"
        placeholder="Booking Check In"
        className="outline-none border-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Switch
        checked={switchValue}
        onCheckedChange={setSwitchValue}
        className="bg-green-600"
      />
    </div>
  );
};

export default CustomSwitchInput;
