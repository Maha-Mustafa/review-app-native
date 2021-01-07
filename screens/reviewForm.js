import { Formik } from 'formik';
import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {globalStyles} from '../style/global';
import * as Yup from 'yup';
import FlatButton from '../shared/button';

const ReviewSchema = Yup.object({
  title: Yup.string().required().min(4),
  body: Yup.string().required().min(8),
  rating: Yup.string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});
export default function ReviewForm({addReview}){
    return (
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ title: "", body: "", rating: "" }}
          validationSchema={ReviewSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            addReview(values);
          }}
        >
          {/* create different form fields, do it inside a jsx fn */}
          {(props) => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review Title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
                onBlur={props.handleBlur('title')}
              />
              <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Review Body"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                onBlur={props.handleBlur('body')}
              />
              <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Rating(1-5)"
                keyboardType="numeric"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                onBlur={props.handleBlur('rating')}
              />
              <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
              {/* <Button
                title="Submit"
                color="#654062"
                onPress={props.handleSubmit}
              /> */}
              <FlatButton text = 'Submit' onPress={props.handleSubmit}/>
            </View>
          )}
        </Formik>
      </View>
    );
}