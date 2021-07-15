import React from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'

const TodoList = ({todos,handleDelet}) => {

   
    
    return (
        <View style={styles.todoCollection}>
            {
                todos.length ? (
                    <FlatList
                data = {todos}
                keyExtractor = {(item => {key:item.id})}
                renderItem ={({item}) =>(
                    <TouchableOpacity>
                            <View style={styles.coco}>
                         <Text style={styles.todoitem}>{item.task} </Text>
                            <Text style={styles.delte} onPress ={() =>{handleDelet(item.id)}}>&times;</Text>    
                    </View>
                        </TouchableOpacity>
                        
                )}
            />
                ) :(
                    <View style={styles.notodoCollection}>
                        <Text style={styles.notodo}>You Have No Task</Text>
                    </View>
                )
            }
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    todoCollection:{
        display: 'flex',
        flex:1, 
        justifyContent: 'space-around',
        paddingTop:10
    },
    coco:{
        borderColor:'#5cc7f14b',
        borderBottomWidth:2, 
        marginTop: 3,
        borderStyle:'dashed',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:10,
        alignItems: 'center'

    },
    todoitem:{
        color:'gray',
        fontSize: 20,
        flex: 1,
    },
    delte:{
        color:'red',
        fontSize: 30,
        borderRadius:10,
        flex: 0.5,
        textAlign:'center'
    },
    notodoCollection:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    notodo:{
        fontSize: 30,
        color: '#000'
    }
    
})
