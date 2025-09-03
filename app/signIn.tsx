import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from './lib/appwrite'
import { useGlobalContext } from './lib/global-provider'

const SignIn = () => {

  const { isLoggedIn, user, loading, refetch } = useGlobalContext();
  
  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch({} as Record<string, string | number>);
    } else {
      Alert.alert('Error', 'Login failed');
    }
  }
  return (
    <View className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='cover'></Image>
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to Restate</Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>Lets Get You Closer To {'\n'}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>
          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Please sign in to continue</Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
            <View className='flex flex-row items-center justify-center'>
              <Image source={icons.google} className='w-5 h-5' resizeMode='contain' />
              <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Continue with Google</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  )
}

export default SignIn