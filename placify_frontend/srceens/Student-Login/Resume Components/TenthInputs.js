

// EducationTypeDropdown.js (Assuming similar to your previous example) 
// ...

// TenthInputs.js
import React from 'react';
import { View, TextInput } from 'react-native';

const TenthInputs = ({ fields, updateFields }) => {
  const handleChange = (text, fieldName) => {
    updateFields({ ...fields, [fieldName]: text });
  };

  return (
    <View>
      <TextInput
        placeholder="School/Board Name"
        value={fields.schoolName}
        onChangeText={(text) => handleChange(text, 'schoolName')}
      />
      {/* ... Other 10th fields */}
    </View>
  );
};

export default TenthInputs;

// TwelfthInputs.js (Similar to TenthInputs)
// ...
