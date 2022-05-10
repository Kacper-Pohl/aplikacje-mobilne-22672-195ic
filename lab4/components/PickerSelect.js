import React ,{useState}  from 'react';
import { View, Text} from 'react-native';
import styles from '../styles';
import Select from "./Select";

export default function PickerSelect() {
    const [items, setItems] = useState([
        { label: "", value: "" },
        { label: "BMW E36", value: "BMW E36" },
        { label: "BMW E38", value: "BMW E38" },
        { label: "BMW E39", value: "BMW E39" },
        { label: "BMW E46", value: "BMW E46" }
        ]);
    const [number, setNumber] = useState([
        { label: "", value: null, element: ["BMW E36", "BMW E36", "BMW E36", "BMW E36"] },
        { label: "1", value: 1, element: ["BMW E36", "BMW E39"] },
        { label: "3", value: 2, element: ["BMW E36", "BMW E38"] },
        { label: "2", value: 4, element: ["BMW E38"] },
        { label: "2", value: 4, element: ["BMW E46"] }
        ]);
    const [availableNumber, setAvailableNumber] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selection, setSelection] = useState("");
    return (
        <View style={styles.PickerSelect.container}>
            <View style={styles.PickerSelect.pickerContainer}>
                <View style={styles.PickerSelect.selectContainer}>
                    <Select
                        label="Samochód"
                        items={items}
                        selectedValue={selectedItem}
                        onValueChange={it => {
                            setSelectedItem(it);
                            setSelectedNumber(null);
                            setAvailableNumber(number.filter(i =>
                                i.element.includes(it)));
                        }}
                    />
                </View>
                <View style={styles.PickerSelect.selectContainer}>
                    <Select
                        label="Ilość"
                        items={availableNumber}
                        selectedValue={selectedNumber}
                        onValueChange={numb => {
                            setSelectedItem(numb);
                            setSelection(
                                ` Dostępne ${number.find(i => i.value ===
                                    numb).label}`
                        );
                    }}
                    />
                </View>
            </View>
            <View style={styles.PickerSelect.selectionContainer}>
                <Text style={styles.PickerSelect.selection}>{selection}</Text>
            </View>
        </View>
        );
   }