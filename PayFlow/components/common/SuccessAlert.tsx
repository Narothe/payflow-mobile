import { showMessage } from "react-native-flash-message";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const SuccessAlert = ({ message }: { message: string }) => {
  showMessage({
    icon: props => <MaterialCommunityIcons size={20} name={"checkbox-marked-circle-outline"} {...props} />,
    message: message,
    type: 'success',
  });
}
