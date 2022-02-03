import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Password } from "../../Redux/Constants/Password";
import { NotiSucess, NotiWarning } from "../Noti/Noti";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Actions/Index";



const styles = {
	width: '100%',
	height: '100%',
}

export default function Login() {
    const navigate = useNavigate();
	const dispatch = useDispatch();
	const [open, setOpen] = React.useState(false);
    const [password, setPassword] = React.useState('')
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

    const handleLogin = () => {
        if(password === Password){
			dispatch(login())
            navigate('/home');
            NotiSucess('Đăng nhập thành công');
            setOpen(false)
        } else{
            NotiWarning('Đăng nhập thất bại')
        }
    }

	return (
		<div>
			<img style={styles} src="/img/1.png"/>
			<Button variant='outlined' onClick={handleClickOpen}>
				Đăng nhập
			</Button>
			<Dialog open={open} onClose={handleClose} fullScreen>
				<DialogTitle>Nh3</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='Password'
						type='password'
						fullWidth
						variant='standard'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Thoát</Button>
					<Button onClick={handleLogin}>Đăng nhập</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
