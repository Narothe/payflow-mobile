import { showMessage } from "react-native-flash-message";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const DangerAlert = ({ message }: { message: string }) => {
  showMessage({
    icon: props => <MaterialIcons size={20} name={"error-outline"} {...props} />,
    message: message,
    type: 'danger',
  });
}
