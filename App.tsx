import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import fonts from './src/theme/fonts';
import colors from './src/theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={styles.post}>
       {/**Header */}
        <View style={styles.header}>
          <Image 
           source={{uri:'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'}}
           style={styles.userAvatar}
           />
           <Text style={styles.userName}>Radiance Dev</Text>

           <Entypo name="dots-three-horizontal" size={16} style={styles.dotsThreeDot}/>
        </View>
        {/**Content */}
        <Image  
          source={{uri:'https://images.unsplash.com/photo-1624267439301-8147fff1a23d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',}}
        
          style={styles.image}
        />

         {/**Footer */}
         <View style={styles.footer}>

         <View style={styles.iconContainer}>
          <Pressable>
            <AntDesign
              name={'heart'}
              size={24}
              style={styles.icon}
              // color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />

          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <Text style={{color:'red'}}>Liked by {''} <Text style={{fontWeight:fonts.weight.bold}}>Radiance Dev</Text> and {''}<Text style={{fontWeight:fonts.weight.bold}}> 66 others</Text>.</Text>

        
            {/**Post description */}
            <Text style={styles.text}>
               <Text style={{fontWeight:fonts.weight.bold}}>Radiance Dev {''}</Text>
               But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, 
            </Text>

               {/**Comments*/}
               <Text>View All 16 Comments</Text>
               <View style={styles.comments}>
                  <Text style={styles.commentText}>
                     <Text>Radiance Dev</Text>
                     but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful
                  </Text>
                  <AntDesign
              name={'heart'}
              size={16}
              style={styles.icon}
              // color={isLiked ? colors.accent : colors.black}
              />
               </View>

                {/**Posted date*/}
                <Text>25 February 2024</Text>
         </View>

         
    </View>
  )
}
const styles = StyleSheet.create({
  post:{

  },
  image:{
   width:'100%',
   aspectRatio:1,
  },
  dotsThreeDot:{
    marginLeft:'auto'
  },
  userName:{
   fontWeight:fonts.weight.bold,
   color:colors.black
  },
  userAvatar:{
  width:50,
  height:50,
  borderRadius:25,
  marginLeft:10,
  marginRight:15,

  },
  header:{
    flexDirection:'row', 
    padding:5,
    alignItems:'center'
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  footer:{
    padding: 10,
  },
  text: {
    color: colors.black,
    lineHeight: 20,
  
  },
  comments:{
    flexDirection:'row',
    alignItems:'center',
  },
  commentText:{
   color:colors.black,
   flex:1
  }
  
})
export default App