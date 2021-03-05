import { IonButton, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const styles = {
  myGrid: {
    padding: '20px'
  },
  mb: {
    marginBottom: '20px'
  }
}

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentForm: 1,
      1: {

      },
      2: {

      },
      3: {

      }
    }
  }

  formSubmitted = (formIndex: number, formValues: any, finalForm = false) => {
    this.setState({
      currentForm: formIndex,
      [formIndex-1]: formValues
    }, () => {
      if(finalForm) {
        console.log("All forms are submitted", this.state);
      }
    });
  }

  render() {
    return (
      <>
        {
          this.state.currentForm === 1
            ?
              <Form1 formSubmitted={this.formSubmitted}/>
            :
            this.state.currentForm === 2
            ?
              <Form2  formSubmitted={this.formSubmitted} />
            :
            this.state.currentForm === 3
            ?
              <Form3  formSubmitted={this.formSubmitted} />
            :
            this.state.currentForm === 4
            ?
              <h2>All forms submitted!</h2>
            :
              <h3>Something went wrong!</h3>
        }
      </>
    )
  }
}

class Form1 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      fullName: '',
      age: 0,
      dob: ''
    }
  }

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: isNaN(e.target.value)? e.target.value: parseInt(e.target.value)
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);
    this.props.formSubmitted(2, this.state)
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <form onSubmit={this.handleSubmit}>
            <IonGrid style={styles.myGrid}>
    
              <IonRow>
                <IonCol style={{textAlign: 'center'}}>
                  <h2>[1] General Details</h2>
                </IonCol>
              </IonRow>
    
              <IonRow style={styles.mb}>
                <IonItem style={{width: '100%'}}>
                  <IonLabel position="floating">Full Name</IonLabel>
                  <IonInput name="fullName" onIonChange={this.handleChange} value={this.state.fullName}></IonInput>
                </IonItem>
              </IonRow>
    
              <IonRow style={styles.mb}>
                <IonItem style={{width: '100%'}}>
                  <IonLabel position="floating">Age</IonLabel>
                  <IonInput name="age" onIonChange={this.handleChange} type="number" value={this.state.age}></IonInput>
                </IonItem>
              </IonRow>
    
              <IonRow style={styles.mb}>
                <IonItem style={{width: '100%'}}>
                  <IonLabel position="floating">DOB</IonLabel>
                  <IonDatetime name="dob" onIonChange={this.handleChange} value={this.state.dob} displayFormat="DD MMM YYYY" min="1989-06-04" max="2004-08-23"></IonDatetime>
                </IonItem>
              </IonRow>
    
              <IonRow style={{display: 'flex', justifyContent: 'center'}}>
                <IonButton type="submit">Submit</IonButton>
              </IonRow>
    
            </IonGrid>
          </form>
        </IonContent>
      </IonPage>
    );
  }
};

class Form2 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      fullName: '',
      age: 0,
      dob: ''
    }
  }

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: isNaN(e.target.value)? e.target.value: parseInt(e.target.value)
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);
    this.props.formSubmitted(3, this.state)
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <form onSubmit={this.handleSubmit}>
            <IonGrid style={styles.myGrid}>
    
              <IonRow>
                <IonCol style={{textAlign: 'center'}}>
                  <h2>[2] General Details</h2>
                </IonCol>
              </IonRow>
    
              <IonRow style={styles.mb}>
                <IonItem style={{width: '100%'}}>
                  <IonLabel position="floating">Full Name</IonLabel>
                  <IonInput name="fullName" onIonChange={this.handleChange} value={this.state.fullName}></IonInput>
                </IonItem>
              </IonRow>
    
              <IonRow style={styles.mb}>
                <IonItem style={{width: '100%'}}>
                  <IonLabel position="floating">Age</IonLabel>
                  <IonInput name="age" onIonChange={this.handleChange} type="number" value={this.state.age}></IonInput>
                </IonItem>
              </IonRow>
    
              <IonRow style={styles.mb}>
                <IonItem style={{width: '100%'}}>
                  <IonLabel position="floating">DOB</IonLabel>
                  <IonDatetime name="dob" onIonChange={this.handleChange} value={this.state.dob} displayFormat="DD MMM YYYY" min="1989-06-04" max="2004-08-23"></IonDatetime>
                </IonItem>
              </IonRow>
    
              <IonRow style={{display: 'flex', justifyContent: 'center'}}>
                <IonButton type="submit">Submit</IonButton>
              </IonRow>
    
            </IonGrid>
          </form>
        </IonContent>
      </IonPage>
    );
  }
};


class Form3 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      fullName: '',
      age: 0,
      dob: ''
    }
  }

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: isNaN(e.target.value)? e.target.value: parseInt(e.target.value)
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);
    this.props.formSubmitted(4, this.state, true)
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <form onSubmit={this.handleSubmit}>
            <IonGrid style={styles.myGrid}>
    
              <IonRow>
                <IonCol style={{textAlign: 'center'}}>
                  <h2>[3] General Details</h2>
                </IonCol>
              </IonRow>
    
              <IonRow style={styles.mb}>
                <IonItem style={{width: '100%'}}>
                  <IonLabel position="floating">Full Name</IonLabel>
                  <IonInput name="fullName" onIonChange={this.handleChange} value={this.state.fullName}></IonInput>
                </IonItem>
              </IonRow>
    
              <IonRow style={styles.mb}>
                <IonItem style={{width: '100%'}}>
                  <IonLabel position="floating">Age</IonLabel>
                  <IonInput name="age" onIonChange={this.handleChange} type="number" value={this.state.age}></IonInput>
                </IonItem>
              </IonRow>
    
              <IonRow style={styles.mb}>
                <IonItem style={{width: '100%'}}>
                  <IonLabel position="floating">DOB</IonLabel>
                  <IonDatetime name="dob" onIonChange={this.handleChange} value={this.state.dob} displayFormat="DD MMM YYYY" min="1989-06-04" max="2004-08-23"></IonDatetime>
                </IonItem>
              </IonRow>
    
              <IonRow style={{display: 'flex', justifyContent: 'center'}}>
                <IonButton type="submit">Submit</IonButton>
              </IonRow>
    
            </IonGrid>
          </form>
        </IonContent>
      </IonPage>
    );
  }
};


export default Home;
