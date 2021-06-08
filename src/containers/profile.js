import { Profile } from "components";
import { useAuthListener } from "hooks";

import React from "react";

export function ProfileContainer() {
  const { user } = useAuthListener();

  return (
    <Profile>
      <Profile.ItemList>
        <Profile.Item>{user.displayName}</Profile.Item>
        <Profile.Item>{user.email}</Profile.Item>
        <Profile.Text>{user.uid}</Profile.Text>
      </Profile.ItemList>
    </Profile>
  );
}
