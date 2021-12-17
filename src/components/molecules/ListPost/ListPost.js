import './ListPost.scss'
import { 
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    Typography,
    Button
} from "@mui/material"
import { useHistory } from 'react-router-dom'

const ListPost = ({ data }) => {
    const history = useHistory()
    
    return (
        <List className="list-post">
            {data.map(item => {
                return (
                    <ListItem key={item.id}>
                        <ListItemButton className="button-list__post" sx={{ boxShadow: 4, borderRadius: 2 }}>
                            <ListItemText>
                                <Typography className="title__post">{item.title}</Typography>
                                <Typography color="text.secondary">{item.body}</Typography>
                                <Button variant="contained" onClick={() => history.push('/detail-post/' + item.id)}>more</Button>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default ListPost
