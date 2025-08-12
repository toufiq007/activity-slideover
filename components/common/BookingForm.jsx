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
        <div className="space-y-2">
          <Label
            htmlFor="created-by"
            className="text-sm font-medium text-gray-700"
          >
            Created By <span className="text-green-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full rounded-4xl">
              <SelectValue placeholder="Ex: test@padelmates.se" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="test@padelmates.se">
                test@padelmates.se
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Start Time and End Time */}
        <div className="flex justify-between">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Start Time <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="rounded-4xl">
                <SelectValue placeholder="Select Start Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="09:00">09:00</SelectItem>
                <SelectItem value="10:00">10:00</SelectItem>
                <SelectItem value="11:00">11:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              End Time <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="rounded-4xl">
                <SelectValue placeholder="Select End Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10:00">10:00</SelectItem>
                <SelectItem value="11:00">11:00</SelectItem>
                <SelectItem value="12:00">12:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Choose Activity */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">
            Choose Activity <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full rounded-4xl">
              <SelectValue placeholder="Select Activity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="padel">Padel</SelectItem>
              <SelectItem value="tennis">Tennis</SelectItem>
              <SelectItem value="squash">Squash</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Add Players */}
        <div className="flex items-center justify-between border-2 rounded-4xl px-2">
          <Input
            type="text"
            placeholder="add players"
            className="outline-0 border-0"
          />
          <Button
            size="sm"
            className="h-5 w-5 rounded-full bg-green-500 hover:bg-green-600 p-0"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Recurrent Activity */}
        <div className="flex items-center justify-between border-2 rounded-4xl px-2">
          <Input
            type="text"
            placeholder="Recurrent Activity?"
            className="outline-0 border-0"
          />
          <Switch
            checked={recurrentActivity}
            onCheckedChange={setRecurrentActivity}
            className="bg-green-600"
          />
        </div>

        {/* Choose Multiple Courts */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">
            Choose Multiple Courts
          </Label>
          <Select>
            <SelectTrigger className="w-full rounded-4xl">
              <SelectValue placeholder="Select Courts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="court1">Court 1</SelectItem>
              <SelectItem value="court2">Court 2</SelectItem>
              <SelectItem value="court3">Court 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Booking Check In */}
        <div className="flex items-center justify-between border-2 rounded-4xl px-2">
          <Input type="text" placeholder="Booking Check In" />
          <Switch
            checked={bookingCheckIn}
            onCheckedChange={setBookingCheckIn}
            className="bg-green-600"
          />
        </div>

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
