import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

const signIn = () => {
  return (
    <View className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='cover'></Image>
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to Restate</Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>Lets Get You Closer To {'\n'}
            <Text className='text-primary-300'>Your Dream Home</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default signIn