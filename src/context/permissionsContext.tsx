/* eslint-disable react/react-in-jsx-scope */
import React, {createContext, useState} from 'react';
import {Platform} from 'react-native';
import {PERMISSIONS, PermissionStatus, request} from 'react-native-permissions';
import {Permissions} from '../models/permissionsContext/permissionsContext';

export const PermissionsInitState: Permissions.PermissionsState = {
  locationStatus: 'denied',
};

export const PermissionsContext = createContext(
  {} as Permissions.PermissionsContextProps,
);

export const PermissionsProvider = ({children}: any) => {
  const [permissions, setPermissions] = useState(PermissionsInitState);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }
    setPermissions({...permissions, locationStatus: permissionStatus});
  };

  const checkLocationPermission = () => {};

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askLocationPermission,
        checkLocationPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
