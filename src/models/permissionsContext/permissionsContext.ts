import {PermissionStatus} from 'react-native';

export namespace Permissions {
  export interface PermissionsState {
    locationStatus: PermissionStatus;
  }

  export interface PermissionsContextProps {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
  }
}
