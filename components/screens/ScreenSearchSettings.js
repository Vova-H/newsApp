import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {observer} from "mobx-react";
import SearchSettingsStore from "../../store/SearchSettingsStore";
import searchSettingsStore from "../../store/SearchSettingsStore";
import RNPickerSelect from "react-native-picker-select";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const ScreenSearchSettings = observer(() => {

    const [openDateFrom, setOpenDateFrom] = useState(false)
    const [openDateTo, setOpenDateTo] = useState(false)

    const showDatePickerDateFrom = () => {
        setOpenDateFrom(true);
    };
    const hideDatePickerDateFrom = () => {
        setOpenDateFrom(false);
    };
    const handleConfirmDateFrom = async (date) => {
        let formattedDate = JSON.stringify(date)
        formattedDate = formattedDate.slice(1, 11)
        await searchSettingsStore.setPeriodFrom(formattedDate)
        hideDatePickerDateFrom();
    };


    const showDatePickerDateTo = () => {
        setOpenDateTo(true);
    };
    const hideDatePickerDateTo = () => {
        setOpenDateTo(false);
    };
    const handleConfirmDateTo = async (date) => {
        let formattedDate = JSON.stringify(date)
        formattedDate = formattedDate.slice(1, 11)
        await searchSettingsStore.setPeriodTo(formattedDate)
        hideDatePickerDateTo();
    };


    return (
        <View style={styles.container}>
            <View style={styles.periodFromWrapper}>
                <Text style={styles.periodFrom}>Period From:</Text>
                <TouchableOpacity>
                    <Text onPress={showDatePickerDateFrom}>{searchSettingsStore.periodFrom}</Text>
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={openDateFrom}
                mode="date"
                onConfirm={handleConfirmDateFrom}
                onCancel={hideDatePickerDateFrom}
            />

            <View style={styles.periodToWrapper}>
                <Text style={styles.periodTo}>Period To:</Text>
                <TouchableOpacity>
                    <Text onPress={showDatePickerDateTo}>{searchSettingsStore.periodTo}</Text>
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={openDateTo}
                mode="date"
                onConfirm={handleConfirmDateTo}
                onCancel={hideDatePickerDateTo}
            />

            <RNPickerSelect value={"publishedAt"} onValueChange={(sortBy) => SearchSettingsStore.setSortBy(sortBy)}
                            items={[
                                {label: "relevancy", value: "relevancy"},
                                {label: "popularity", value: "popularity"},
                                {label: "publishedAt", value: "publishedAt"},
                            ]}
            >
            </RNPickerSelect>
        </View>
    )
        ;
})


const styles = StyleSheet.create({
    container: {height: "100%", paddingHorizontal: 10},

    periodFromWrapper: {flexDirection: "row", alignItems: "center", marginTop: 20},
    periodFrom: {fontSize: 20, width: "35%"},
    periodFromInput: {borderWidth: 1, paddingHorizontal: 10, width: "30%", textAlign: "center"},

    periodToWrapper: {flexDirection: "row", alignItems: "center", marginTop: 20},
    periodTo: {fontSize: 20, width: "35%"},
    periodToInput: {borderWidth: 1, paddingHorizontal: 10, width: "30%", textAlign: "center"},

    sortByWrapper: {flexDirection: "row", alignItems: "center", marginTop: 20},
    sortBy: {fontSize: 20, width: "35%"},
    sortByInput: {borderWidth: 1, paddingHorizontal: 10, width: "30%", textAlign: "center"},
})

export default ScreenSearchSettings;
