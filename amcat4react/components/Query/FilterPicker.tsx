import { Button, Icon, Popup } from "semantic-ui-react";
import {
  AmcatUser,
  AmcatField,
  AmcatFilter,
  AmcatIndexName,
} from "../../interfaces";
import { filterLabel, FilterPopup } from "./FilterPopups";

interface FilterPickerProps {
  user: AmcatUser;
  index: AmcatIndexName;
  field: AmcatField | undefined;
  value: AmcatFilter | undefined;
  onChange: (value: AmcatFilter) => void;
  onDelete?: () => void;
  [key: string]: any;
}
export default function FilterPicker({
  user,
  index,
  field,
  value,
  onChange,
  onDelete,
  ...props
}: FilterPickerProps) {
  if (field == null || value == null) return null;

  return (
    <Popup
      on="click"
      position="bottom center"
      trigger={
        <Button {...props} className="valuepicker">
          {onDelete == null ? null : (
            <Icon link name="delete" onClick={onDelete} />
          )}
          {filterLabel(field, value, true)}
        </Button>
      }
    >
      <FilterPopup
        user={user}
        index={index}
        field={field}
        value={value}
        onChange={onChange}
      />
    </Popup>
  );
}
