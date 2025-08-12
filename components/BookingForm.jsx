"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Plus, Minus } from "lucide-react";

import {
  chooseActivityList,
  createSelectList,
  endTimeList,
  multipleCourtList,
  startTimeList,
} from "@/lib/demoList";
import CustomSelect from "./common/CustomSelect";
import CustomSwitchInput from "./common/CustomSwitchInput";

export default function BookDemoForm() {
  const [cancellationHours, setCancellationHours] = useState(24);
  const [recurrentActivity, setRecurrentActivity] = useState(false);
  const [bookingCheckIn, setBookingCheckIn] = useState(false);
  const [totalPrice, setTotalPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [doorCode, setDoorCode] = useState("");

  const incrementHours = () => {
    setCancellationHours((prev) => prev + 1);
  };

  const decrementHours = () => {
    setCancellationHours((prev) => Math.max(0, prev - 1));
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg overflow-y-auto h-[650px]">
      <CardContent className="space-y-4">
        {/* Created By */}
        <CustomSelect label="Created By" selectItemsList={createSelectList} />

        {/* Start Time and End Time */}
        <div className="flex justify-between gap-2">
          <CustomSelect label="Start Time" selectItemsList={startTimeList} />
          <CustomSelect label="End Time" selectItemsList={endTimeList} />
        </div>

        {/* Choose Activity */}
        <CustomSelect
          label="Choose Activity"
          selectItemsList={chooseActivityList}
        />

        {/* Add Players */}
        <div className="flex items-center justify-between border-2 rounded-4xl px-2">
          <Input
            type="text"
            placeholder="add players"
            className="outline-none border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            size="sm"
            className="h-5 w-5 rounded-full bg-green-500 hover:bg-green-600 p-0"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Recurrent Activity */}
        <CustomSwitchInput
          switchValue={recurrentActivity}
          setSwitchValue={setRecurrentActivity}
        />

        {/* Choose Multiple Courts */}
        <CustomSelect
          label="Select Multiple court"
          selectItemsList={multipleCourtList}
        />

        {/* Booking Check In */}
        <CustomSwitchInput
          switchValue={bookingCheckIn}
          setSwitchValue={setBookingCheckIn}
        />

        {/* Cancellation Time and Door Code */}
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Cancellation Time
            </Label>
            <div className="flex items-center space-x-2 border-2 px-2 rounded-4xl  p-2">
              <Button
                variant="outline"
                size="sm"
                className="h-5 w-5 rounded-full p-0 bg-transparent"
                onClick={decrementHours}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="flex-1 text-center text-sm font-medium">
                {cancellationHours}
              </span>
              <Button
                variant="outline"
                size="sm"
                className="h-5 w-5 rounded-full p-0 bg-transparent"
                onClick={incrementHours}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="space-y-2 border-0">
            <Label className="text-sm font-medium text-gray-700">
              Door Code
            </Label>
            <div className="rounded-4xl">
              <Input
                placeholder="Door Code"
                value={doorCode}
                onChange={(e) => setDoorCode(e.target.value)}
                className="text-sm"
              />
            </div>
          </div>
        </div>

        {/* Total Price and Discount */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Total price <span className="text-red-500">*</span>
            </Label>
            <div className="flex">
              <Select defaultValue="$">
                <SelectTrigger className="w-16 rounded-r-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$">$</SelectItem>
                  <SelectItem value="€">€</SelectItem>
                  <SelectItem value="£">£</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="0"
                value={totalPrice}
                onChange={(e) => setTotalPrice(e.target.value)}
                className="rounded-l-none border-l-0"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Discount <span className="text-red-500">*</span>
            </Label>
            <div className="flex">
              <Select defaultValue="%">
                <SelectTrigger className="w-16 rounded-r-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="%">%</SelectItem>
                  <SelectItem value="$">$</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="0"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="rounded-l-none border-l-0"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <Button variant="outline" className="flex-1 bg-transparent">
            Cancel
          </Button>
          <Button className="flex-1 bg-green-500 hover:bg-green-600">
            Book Court
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
