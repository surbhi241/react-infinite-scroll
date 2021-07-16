import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, Paper } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      background: '#76c7c0',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
        width: '400px',
        height: '300px',
        padding: theme.spacing(3)
      }
    },
    margin: {
        margin: theme.spacing(3),
        width: '40ch'
    },
    btnMargin: {
        margin: theme.spacing(3),
    },
    errorMsg: {
        color: "red",
        display: "flex",
        justifyContent: "center"
    }
  }));
const Login = () => {
    const classes = useStyles();
    const history = useHistory();

    const labelWidth = 80;
    const [values, setValues] = React.useState({
        userName: '',
        password: '',
        showPassword: false,
        helperText: '',
      });
      const handleChange = (prop: any) => (event: React.ChangeEvent<{value: string}>) => {
        const { value } = event.target; 
        setValues({ ...values, [prop]: value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event: React.MouseEvent) => {
        event.preventDefault();
      }; 
    
      const handleLogin = (event: React.MouseEvent) => {
        event.preventDefault();
        const user = {
          userName: values.userName || "",
          password: values.password || ""
        }
        localStorage.setItem("user", JSON.stringify(user));
        if(values.userName === "foo" && values.password === "bar"){
            history.push("/home");
            setValues({...values, helperText: ""})
        } if(values.userName !== "foo"){
            setValues({...values, helperText: "Wrong username. Please Try again"})
        } if(values.password !== "bar"){
            setValues({...values, helperText: "Wrong password. Please Try again"})
        } if(values.password !== "bar" && values.userName !== "foo"){
            setValues({...values, helperText: "Wrong username and password. Please Try again"})
        }
      }
    return(
        <div className={classes.root}>
            <Paper>
                <FormControl className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">UserName</InputLabel>
                    <OutlinedInput
                        data-testid="outlined-adornment-username"
                        type='text'
                        value={values.userName}
                        onChange={handleChange('userName')}
                        labelWidth={labelWidth}
                    />
                </FormControl>
                <FormControl className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        data-testid="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword}

                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={labelWidth}
                    />
                </FormControl>
                {values.helperText ? <FormHelperText className={classes.errorMsg}>{values.helperText}</FormHelperText> : null}
                <Button variant="contained" color="primary" className={classes.margin} onClick={handleLogin}>
                    Login
                </Button>
            </Paper>
        </div>
    )
}

export default Login;