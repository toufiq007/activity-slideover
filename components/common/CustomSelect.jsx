import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CustomSelect = ({ label, selectItemsList }) => {
  return (
    <div className="space-y-2 w-full">
      <Label htmlFor="created-by" className="text-sm font-medium text-gray-700">
        {label} <span className="text-green-500">*</span>
      </Label>
      <Select>
        <SelectTrigger className="w-full rounded-4xl">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {selectItemsList?.length > 0 &&
            selectItemsList?.map((select) => (
              <SelectItem key={select?.id} value={select?.value}>
                {select?.title}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
