import { CustomDatePickerContainer } from './styles';

type CustomDatePickerProps = { id: string };

export function CustomDatePicker({ id }: CustomDatePickerProps) {
  return (
    <CustomDatePickerContainer>
      <input
        id={id}
        type="date"
        min={`${new Date().toISOString().split('T')[0]}`}
      />
    </CustomDatePickerContainer>
  );
}
