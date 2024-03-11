import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login';
import MenuScreen from './src/components/MenuScreen';
import ReceptionistMenuScreen from './src/screens/Menus/Receptionist';
import RegisterCpfScreen from './src/screens/Register/Documents/cpf';
import RegisterNameScreen from './src/screens/Register/name';
import RegisterEmailScreen from './src/screens/Register/email';
import RegisterCompanyScreen from './src/screens/Register/company';
import RegisterPhoneScreen from './src/screens/Register/phone';
import ListScreen from './src/components/ListScreen';
import TypeVisitorScreen from './src/screens/Register/TypeVisitor';
import ChooseVechile from './src/screens/Register/Vechile/ChooseVechile';
import TermsScreen from './src/screens/Register/terms';
import RegisterCarPlateScreen from './src/screens/Register/Vechile/carPlate';
import RegisterModelScreen from './src/screens/Register/Vechile/vechileModel';
import RegisterCarColorScreen from './src/screens/Register/Vechile/color';
import ReasonVisitScreen from './src/screens/Register/Visit/ReasonVisit';
import RegisterSubjectScreen from './src/screens/Register/Visit/subject';
import RegisterVisitedEmailScreen from './src/screens/Register/Visit/email';
import RegisterVisitedPhoneScreen from './src/screens/Register/Visit/phone';
import ChooseAreaScreen from './src/screens/Register/Visit/ChooseArea';
import CameraPage from './src/components/photo/camera';
import RegisterUserPhoto from './src/screens/Register/userFace/camera';
import PhotoPreview from './src/screens/Register/userFace/preview';
import KindDocumentCheckIn from './src/screens/checkIn/document/kindOfDocument';
import DocumentCheckIn from './src/screens/checkIn/document/document';
import VisitorProfile from './src/screens/visitorProfile';
import CheckInCamera from './src/screens/checkIn/camera';
import CheckInMenu from './src/screens/Menus/CheckIn';
import CheckOutMenu from './src/screens/Menus/CheckOut';
import GateMenuScreen from './src/screens/Menus/GateMenu';
import KindDocumentCheckOut from './src/screens/checkout/document/kindOfDocument';
import DocumentCheckOut from './src/screens/checkout/document/document';
import CheckOutCamera from './src/screens/checkout/camera';
import CheckOutQRcode from './src/screens/checkout/QRcode';
import VechileCheckIn from './src/screens/checkIn/vechile';
import VechileGateMenuScreen from './src/screens/Menus/vechileGate';
import VechileCheckOut from './src/screens/checkout/vechile';
import EntryReportsScreen from './src/screens/settings/reports/entry';
import ExitReportsScreen from './src/screens/settings/reports/exit';
import CheckInRealized from './src/screens/checkIn/realized';
import RegisterDocumentUserPhoto from './src/screens/Register/userDocument/camera';
import DocumentPhotoPreview from './src/screens/Register/userDocument/preview';
import KindDocumentScreen from './src/screens/Register/Documents/kindDocument';
import RegisterRGScreen from './src/screens/Register/Documents/rg';
import RegisterRNEScreen from './src/screens/Register/Documents/RNE';
import InitalAdm from './src/screens/settings/initialScreen';
import MenuSettingScreen from './src/screens/settings/menu';
import ListReportsScreen from './src/screens/settings/listReports';
import CheckInQRcode from './src/screens/checkIn/QRcode';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>

        <Stack.Screen name='Camera' component={RegisterUserPhoto} />
        <Stack.Screen name='DocumentCamera' component={RegisterDocumentUserPhoto} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        
        {/*/ ROTAS DE CADASTRO /*/} 

        <Stack.Screen name='ReceptionistMenuScreen' component={ReceptionistMenuScreen} />
        <Stack.Screen name='TermsScreen' component={TermsScreen} />
        <Stack.Screen name='RegisterCpfScreen' component={RegisterCpfScreen} />
        <Stack.Screen name='RegisterRgScreen' component={RegisterRGScreen} />
        <Stack.Screen name='RegisterRneScreen' component={RegisterRNEScreen} />



        <Stack.Screen name='KindDocumentScreen' component={KindDocumentScreen} />

        <Stack.Screen name='RegisterNameScreen' component={RegisterNameScreen} />
        <Stack.Screen name='RegisterEmailScreen' component={RegisterEmailScreen} />
        <Stack.Screen name='RegisterCompanyScreen' component={RegisterCompanyScreen} />
        <Stack.Screen name='RegisterPhoneScreen' component={RegisterPhoneScreen} />
        <Stack.Screen name='TypeVisitorScreen' component={TypeVisitorScreen} />
        <Stack.Screen name='ChooseVechileScreen' component={ChooseVechile} />
        <Stack.Screen name='RegisterCarPlateScreen' component={RegisterCarPlateScreen} />
        <Stack.Screen name='RegisterCarModelScreen' component={RegisterModelScreen} />
        <Stack.Screen name='RegisterCarColorScreen' component={RegisterCarColorScreen} />
        <Stack.Screen name='ReasonVisitScreen' component={ReasonVisitScreen} />
        <Stack.Screen name='RegisterSubjectVisitScreen' component={RegisterSubjectScreen} />
        <Stack.Screen name='RegisterVisitedEmailScreen' component={RegisterVisitedEmailScreen} />
        <Stack.Screen name='RegisterVisitedPhoneScreen' component={RegisterVisitedPhoneScreen} />
        <Stack.Screen name='ChooseAreaScreen' component={ChooseAreaScreen} />


        <Stack.Screen name='VisitorProfile' component={VisitorProfile} />


        {/*/ ROTAS DE CHECK-IN /*/}
        <Stack.Screen name='CheckInMenu' component={CheckInMenu} />
        <Stack.Screen name='KindDocumentCheckIn' component={KindDocumentCheckIn} />
        <Stack.Screen name='DocumentCheckIn' component={DocumentCheckIn} />
        <Stack.Screen name='CheckInCamera' component={CheckInCamera} />
        <Stack.Screen name='CheckInQRcode' component={CheckInQRcode} />
        <Stack.Screen name='CheckInVechile' component={VechileCheckIn} />
        <Stack.Screen name='CheckInRealized' component={CheckInRealized} />



        <Stack.Screen name='GateMenuScreen' component={GateMenuScreen} />
        <Stack.Screen name='VechileMenuScreen' component={VechileGateMenuScreen} />

        

        {/*/ ROTAS DE CHECK-OUT /*/}
        <Stack.Screen name='CheckOutMenu' component={CheckOutMenu} />
        <Stack.Screen name='KindDocumentCheckOut' component={KindDocumentCheckOut} />
        <Stack.Screen name='DocumentCheckOut' component={DocumentCheckOut} />
        <Stack.Screen name='CheckOutCamera' component={CheckOutCamera} />
        <Stack.Screen name='CheckOutQRcode' component={CheckOutQRcode} />
        <Stack.Screen name='CheckOutVechile' component={VechileCheckOut} />
        
        {/*/ SETTINGS /*/}
        <Stack.Screen name='InitialAdmScreen' component={InitalAdm} />
        <Stack.Screen name='ListReportsScreen' component={ListReportsScreen} />
        <Stack.Screen name='MenuSettings' component={MenuSettingScreen} />
        <Stack.Screen name='EntryReportsScreen' component={EntryReportsScreen} />
        <Stack.Screen name='ExitReportsScreen' component={ExitReportsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}