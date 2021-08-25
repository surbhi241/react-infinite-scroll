import { Button, Container, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      background: "#FFFFFF",
    },
    container:{
      maxWidth: "500px"
    },
    loginWrapper:{
      background: "#f2f2f2",
      border: '1px solid #d6cbcb',
      borderRadius: "4px"
    },
    margin: {
        width: "calc(100% - 10px)"
    },
    btnMargin: {
        margin: theme.spacing(3),
    },
    errorMsg: {
      color: "red",
      display: "flex",
      justifyContent: "center"
    },
    loginHead: {
      display: "flex",
      padding: theme.spacing(2),
      borderBottom: "1px solid #d6cbcb"
    },
    wrapper:{
      display: "flex",
      padding: theme.spacing(2),
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
          <Container className={classes.container}>
            <Grid className={classes.loginWrapper}>
                <Grid className={classes.loginHead}>
                   Login
                </Grid>
                <Grid item xs={12} className={classes.wrapper}>
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
                </Grid>
                <Grid item xs={12} className={classes.wrapper}>
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
                </Grid>
                {values.helperText ? <Grid item xs={12} className={classes.wrapper}><FormHelperText className={classes.errorMsg}>{values.helperText}</FormHelperText> </Grid>: null}
                <Grid item xs={12} className={classes.wrapper}>
                  <Button variant="contained" color="primary" className={classes.margin} onClick={handleLogin}>
                    Login
                  </Button>
                </Grid>
            </Grid>
          </Container>
        </div>
    )
}

export default Login;