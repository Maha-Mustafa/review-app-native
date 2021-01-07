import React,{useState} from 'react'
import {StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Modal from 'modal-react-native-web';
// import Modal from 'react-native-modal';
import {globalStyles} from '../style/global';
import Card from "../shared/Card";
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from '../screens/reviewForm';

export default function Home({navigation}) {
    const[modalOpen , setModalOpen] = useState(false);
    const[reviews, setReviews] = useState([
        {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Gotta catch them all', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
    ]);
    // adding value to the reviews array
    const addReview = (review) =>{
        review.key = Math.random().toString();
        //updating the state
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        //close the modal after submission
        setModalOpen(false);
        //pass the fn as props to form
    };
    return (
      <View style={globalStyles.container}>
        {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
        {/* <Button title='Goto Review Details' onPress={pressHandler}/> */}
        <Modal visible={modalOpen} animationType="slide">
            <View style={styles.modalContent}>
              <MaterialIcons
                name="close"
                size={24}
                style={[styles.modalToggle, styles.modalClose]}
                onPress={() => setModalOpen(false)}
              />
              {/* <Text>Hello from modal ;)</Text> */}
              <ReviewForm addReview={addReview} />
            </View>
        </Modal>
        <MaterialIcons
          name="add"
          size={24}
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)}
        />
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    );
}
const styles = StyleSheet.create({
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        color: 'purple',
        padding:10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0
    },
    modalContent:{
        flex: 1
    }
})