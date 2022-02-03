import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import {
	addNote,
	deleteNote,
	addTodo,
	activeTodo,
    deleteTodo
} from "../../../Redux/Actions/Index";
import Checkbox from "@mui/material/Checkbox";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import { NotiSucess, NotiWarning } from "../../Noti/Noti";

const actions = [{ icon: <SaveIcon />, name: "Save" }];

export default function Content() {
	const [note, setNote] = useState("");
	const [todo, setTodo] = useState("");
	const dispatch = useDispatch();
	const { notes, todolist } = useSelector((state) => state.note);

	const handleAdd = () => {
		dispatch(addNote(note));
		setNote("");
		NotiSucess("Đã thêm ghi chú");
	};

	const handleDeleteNote = (index) => {
		dispatch(deleteNote(index));
		NotiWarning("Đã xóa ghi chú");
	};

	const handleAddTodo = () => {
		dispatch(addTodo(todo));
		setTodo("");
		NotiSucess("Thêm hoạt động thành công");
	};

    const handleDeleteTodo = (index) => {
        dispatch(deleteTodo(index))
        NotiWarning('Đã xóa hoạt động')
    }
	const handleActive = (index) => {
		dispatch(activeTodo(index));
		NotiSucess("Hoàn thành 1 hoạt động");
	};
	const handleSaveLocal = () => {
		var date = new Date();
		localStorage.setItem("notes", JSON.stringify(notes));
		localStorage.setItem("todolist", JSON.stringify(todolist));
		localStorage.setItem("time", date.getDate());
		NotiSucess("Lưu thành công");
	};

	return (
		<div>
			<Stack
				direction='row'
				divider={<Divider orientation='vertical' flexItem />}
				spacing={2}
				sx={{ padding: "100px" }}
			>
				<Box
					component='form'
					sx={{
						"& > :not(style)": { m: 1, width: "25ch" },
					}}
					noValidate
					autoComplete='off'
				>
					<Stack direction='row' spacing={2}>
						<TextField
							id='outlined-basic'
							label='Thêm nhắc nhở'
							variant='outlined'
							sx={{ width: "100ch" }}
							value={note}
							onChange={(e) => setNote(e.target.value)}
						/>
						<IconButton aria-label='delete' onClick={handleAdd}>
							<AddIcon />
						</IconButton>
					</Stack>
					<List
						sx={{
							overflow: "auto",
							maxHeight: 300,
							"& ul": { padding: 0 },
						}}
					>
						{notes.map((item, index) => (
							<ListItem
								key={index}
								disablePadding
								secondaryAction={
									<IconButton
										edge='end'
										aria-label='delete'
										onClick={() => handleDeleteNote(index)}
									>
										<DeleteIcon />
									</IconButton>
								}
							>
								<ListItemButton>
									<ListItemText primary={item} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
				<Box
					component='form'
					sx={{
						"& > :not(style)": { m: 1, width: "100ch" },
					}}
					noValidate
					autoComplete='off'
				>
					<Stack direction='row' spacing={2}>
						<TextField
							id='outlined-basic'
							label='Thêm hoạt động'
							variant='outlined'
							sx={{ width: "100ch" }}
							value={todo}
							onChange={(e) => setTodo(e.target.value)}
						/>
						<Button variant='contained' onClick={handleAddTodo}>
							Thêm
						</Button>
					</Stack>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Tên</TableCell>
									<TableCell align='right'>Số lần</TableCell>
									<TableCell align='right'>Trạng thái</TableCell>
									<TableCell align='right'>Xóa</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{todolist.map((row, index) => (
									<TableRow
										key={row.name}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									>
										<TableCell component='th' scope='row'>
											{row.name}
										</TableCell>
										<TableCell align='right'>{row.count}</TableCell>
										<TableCell align='right'>
											{row.state ? (
												"Đã hoàn thành"
											) : (
												<Checkbox
													color='primary'
													inputProps={{
														"aria-label": "select all desserts",
													}}
													value={row.state}
													onClick={() => handleActive(index)}
												/>
											)}
										</TableCell>
										<TableCell align='right'>
											<IconButton
												edge='end'
												aria-label='delete'
												onClick={() => handleDeleteTodo(index)}
											>
												<DeleteIcon />
											</IconButton>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Stack>
			<Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
				<SpeedDial
					ariaLabel='SpeedDial basic example'
					sx={{ position: "absolute", bottom: 300, right: 16 }}
					icon={<SpeedDialIcon />}
				>
					{actions.map((action) => (
						<SpeedDialAction
							key={action.name}
							icon={action.icon}
							tooltipTitle={action.name}
							onClick={handleSaveLocal}
						/>
					))}
				</SpeedDial>
			</Box>
		</div>
	);
}
