import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Switch as RNSwitch,
  Picker,
  StatusBar,
  Alert,
  Button as RNButton,
  Image,
  StyleSheet,
} from 'react-native';

// Import your preferred icon library, for example, FontAwesome
import { FontAwesome } from '@expo/vector-icons';

const Rating = ({ rating }) => {
  const maxStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(<FontAwesome name="star" size={20} color="gold" key={i} />);
      } else if (i - 0.5 === rating) {
        stars.push(<FontAwesome name="star-half-full" size={20} color="gold" key={i} />);
      } else {
        stars.push(<FontAwesome name="star" size={20} color="gray" key={i} />);
      }
    }
    return stars;
  };

  return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
};

const MyComponent = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedPickerValue, setSelectedPickerValue] = useState('Option 1');
  const [showText, setShowText] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [showScrollView, setShowScrollView] = useState(false);
  const [showFlatList, setShowFlatList] = useState(false);
  const [showSectionList, setShowSectionList] = useState(false);
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const [showTouchableHighlight, setShowTouchableHighlight] = useState(false);
  const [showTouchableOpacity, setShowTouchableOpacity] = useState(false);
  const [showSwitch, setShowSwitch] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState('pink');
  const [showPhoneSettings, setShowPhoneSettings] = useState(false);
  const [showMapView, setShowMapView] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const sections = [
    {
      title: 'Section Header 1',
      data: ['Item 1', 'Item 2'],
    },
    {
      title: 'Section header 2',
      data: ['Item 3', 'Item 4'],
    },
  ];

  const rainbowColors = [
    { label: 'Red', value: 'red' },
    { label: 'Orange', value: 'orange' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Indigo', value: 'indigo' },
    { label: 'Violet', value: 'violet' },
  ];

  const showAlert = (componentName) => {
    Alert.alert(`Alert from ${componentName}`, 'This is an alert message.');
  };

  const phoneSettings = [
    'Wi-Fi',
    'Bluetooth',
    'Notifications',
    'Display',
    'Sound & Vibration',
    'Battery',
    'Storage',
    'Apps',
    'Security & Privacy',
    'About Phone',
  ];

  const toggleView = () => {
    setSwitchValue(!switchValue);
  };

  const handleBack = () => {
    setShowPhoneSettings(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: selectedColor }]}>
      <View style={styles.homeLabelContainer}>
        <View style={styles.homeLabel}>
          <Text style={styles.homeLabelText}>HOME</Text>
        </View>
      </View>

      {showPhoneSettings && (
        <TouchableOpacity onPress={handleBack} style={styles.backIcon}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      )}
      
        <RNButton title="Search Component" color="pink" onPress={() => setShowText(!showText)} />
        {showText && (
          <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search"
            value={textInputValue}
            onChangeText={(text) => setTextInputValue(text)}
            style={styles.searchBar}
          />
        </View>
      )}

      <RNButton
        title="Input Component"
        color="pink"
        onPress={() => setShowTextInput(!showTextInput)}
      />
      {showTextInput && (
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Email"
            value={textInputValue}
            onChangeText={(text) => setTextInputValue(text)}
            style={styles.textInput}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            value={textInputValue}
            onChangeText={(text) => setTextInputValue(text)}
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>
      )}

      <RNButton title="FlatList Component" color="pink" onPress={() => setShowFlatList(!showFlatList)} />

      {showFlatList && (
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.flatListHeader}>
              <Text style={styles.flatListHeaderText}>Flat List Example Label</Text>
            </View>
          )}
          data={Array(14).fill().map((_, index) => `Row ${index + 1}`)}
          renderItem={({ item }) => (
            <View style={styles.flatListItem}>
              <Text style={styles.flatListItemText}>{item}</Text>
            </View>
          )}
        />
      )}

      <RNButton title="Scroll View Component" color="pink" onPress={() => setShowScrollView(!showScrollView)} />

      {showScrollView && (
        <ScrollView style={styles.touchable}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
            (item) => (
              <View key={item} style={styles.shopItemContainer}>
                <View style={styles.shopItemTextContainer}>
                  <Text style={styles.shopItemText}>Item {item}</Text>
                </View>
                <View style={styles.orderButtonContainer}>
                  <TouchableOpacity
                    onPress={() => handleOrder(item)}
                    style={styles.orderButton}
                  >
                    <Text style={styles.orderButtonText}>ORDER</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          )}
        </ScrollView>
      )}

      <RNButton title="Section List Component" color="pink" onPress={() => setShowSectionList(!showSectionList)} />
      {showSectionList && (
        <SectionList
          sections={sections}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
          )}
        />
      )}

      <RNButton title="Activity Indicator Component" color="pink" onPress={() => setShowActivityIndicator(!showActivityIndicator)} />
      {showActivityIndicator && (
        <ActivityIndicator size="large" color="#0000ff" style={styles.touchable} />
      )}

      <RNButton
        title="Touchable Highlight Component"
        color="pink"
        onPress={() => setShowTouchableHighlight(!showTouchableHighlight)}
      />
      {showTouchableHighlight && (
        <TouchableOpacity
          onPress={() => showAlert('TouchableHighlight')}
          style={styles.touchable}
        >
          <Text>CLICK ME</Text>
        </TouchableOpacity>
      )}

      <RNButton
        title="Touchable Opacity Component"
        color="pink"
        onPress={() => setShowTouchableOpacity(!showTouchableOpacity)}
      />
      {showTouchableOpacity && (
        <TouchableOpacity
          onPress={() => showAlert('TouchableOpacity')}
          style={styles.touchable}
        >
          <Text>Touchable Opacity</Text>
        </TouchableOpacity>
      )}

      <RNButton title="Modal Component" color="pink" onPress={() => setModalVisible(!modalVisible)} />
      {modalVisible && (
        <Modal visible={modalVisible}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <Text style={styles.modalLabel}>Website</Text>
            <TextInput placeholder="Enter your website" style={styles.modalInput} />

            <Text style={styles.modalLabel}>About</Text>
            <Text>Label about a dialogue box</Text>
            <TextInput
              placeholder="Brief description for your profile"
              style={styles.modalInput}
            />

            <Text style={styles.modalLabel}>Cover Photo</Text>
            <Image
              source={{ uri: 'https://example.com/your-profile-image.jpg' }}
              style={styles.coverPhoto}
            />
            <Text style={styles.modalLabel}>Upload a file</Text>

            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButton}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.updateButton}>Update Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      <RNButton title="Switch Component" color="pink" onPress={() => setShowSwitch(!showSwitch)} />
      {showSwitch && (
        <View style={styles.switchContainer}>
          <Text>Mobile View</Text>
          <RNSwitch value={switchValue} onValueChange={toggleView} />
          <Text>Web View</Text>
        </View>
      )}

      {switchValue ? (
        <View>
          <Text>Mobile View Content</Text>
        </View>
      ) : (
        <View>
          <Text>Web View Content</Text>
        </View>
      )}

      <RNButton title="Picker Component" color="pink" onPress={() => setShowPicker(!showPicker)} />
      {showPicker && (
        <Picker
          selectedValue={selectedColor}
          onValueChange={(itemValue) => setSelectedColor(itemValue)}
          style={styles.picker}
        >
          {rainbowColors.map((color) => (
            <Picker.Item key={color.value} label={color.label} value={color.value} />
          ))}
        </Picker>
      )}

      <RNButton title="Status Component" color="pink" onPress={() => setShowStatusBar(!showStatusBar)} />
      {showStatusBar && (
        <View style={styles.statusBarContent}>
          <Text style={styles.statusBarLabel}>Dashboard</Text>
          <Text>No timers set</Text>

          <Text style={styles.statusBarLabel}>Bedtime Mode</Text>
          <Text>Tap to set up</Text>

          <Text style={styles.statusBarLabel}>Focus Mode</Text>
          <Text>Tap to set up</Text>

          <Text style={styles.statusBarLabel}>Do Not Disturb</Text>

          <Text style={styles.statusBarLabel}>Heads Up</Text>
          <Text>Tap to set up</Text>
        </View>
      )}

      <RNButton title="Image Component" color="pink" onPress={() => setShowImage(!showImage)} />
      {showImage && (
        <Image
          source={{ uri: 'https://example.com/your-image-url.jpg' }}
          style={styles.image}
        />
      )}

      <RNButton
        title="Alert Button Component"
        color="pink"
        onPress={() => setAlertVisible(true)}
      />
      {alertVisible && (
        <View>
          <RNButton
            title="Show Alert"
            color="pink"
            onPress={() => {
              showAlert('Alert Button');
              setAlertVisible(false);
            }}
          />
        </View>
      )}

      <RNButton
        title="Form Component"
        color="pink"
        onPress={() => setShowPhoneSettings(!showPhoneSettings)}
      />
      {showPhoneSettings && (
        <ScrollView style={styles.phoneSettings}>
          {phoneSettings.map((setting, index) => (
            <View key={index} style={styles.settingItem}>
              <Text>{setting}</Text>
            </View>
          ))}
        </ScrollView>
      )}

      <RNButton title="Rate Component" color="pink" onPress={() => setModalVisible(true)} />

      {/* Rating component modal */}
      {modalVisible && (
        <Modal visible={modalVisible}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <Text style={styles.modalLabel}>Rate This</Text>
            <Rating rating={rating} /> {/* Display the Rating component */}
            <TouchableOpacity onPress={() => handleRatingChange(1)}>
              <FontAwesome name="star" size={40} color={rating >= 1 ? 'gold' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRatingChange(2)}>
              <FontAwesome name="star" size={40} color={rating >= 2 ? 'gold' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRatingChange(3)}>
              <FontAwesome name="star" size={40} color={rating >= 3 ? 'gold' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRatingChange(4)}>
              <FontAwesome name="star" size={40} color={rating >= 4 ? 'gold' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRatingChange(5)}>
              <FontAwesome name="star" size={40} color={rating >= 5 ? 'gold' : 'gray'} />
            </TouchableOpacity>

            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButton}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.updateButton}>Submit Rating</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      <RNButton
  title="Map View Component"
  color="pink"
  onPress={() => setShowMapView(!showMapView)}
/>

<RNButton
  title="Time Picker Component"
  color="pink"
  onPress={() => setTimePickerVisible(true)}
/>

<RNButton
  title="Badge Component"
  color="pink"
  onPress={() => {
    // Implement logic to show/hide the badge
  }}
/>

<RNButton
  title="Chart Component"
  color="pink"
  onPress={() => {
    // Implement logic to show/hide the chart
  }}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: 'pink',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  touchable: {
    marginVertical: 10,
    flexDirection: 'row',
    width: 300,
    height: 700,
  },
  text: {
    fontSize: 18,
  },
  homeLabelContainer: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  homeLabel: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  homeLabelText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  phoneSettings: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    width: '90%',
    padding: 10,
  },
  settingItem: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
  },
  searchBarContainer: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  searchBar: {
    fontSize: 18,
  },
  textInputContainer: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    marginBottom: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 100,
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalInput: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  coverPhoto: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    color: 'red',
    fontSize: 16,
  },
  updateButton: {
    color: 'green',
    fontSize: 16,
  },
  statusBarContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  statusBarLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  flatListHeader: {
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
  },
  flatListHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  flatListItem: {
    backgroundColor: 'purple',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  flatListItemText: {
    fontSize: 16,
    color: 'white',
  },
  shopLabelContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  shopLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  shopItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
  },

  shopItemTextContainer: {
    flex: 1,
  },

  shopItemText: {
    fontSize: 16,
  },

  orderButtonContainer: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: 'pink',
    borderRadius: 5,
  },

  orderButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  orderButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  sliderContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  sliderLabel: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default MyComponent;
