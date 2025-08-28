import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="font-rubik text-3xl my-10">
        Welcome to Nativewind!
      </Text>
      <Link href="/signIn">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/123">Property 1</Link>
    </View>
  )
}

export default index