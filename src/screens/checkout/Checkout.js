import React, { Component } from "react";
import "../../common/checkout/Addresses";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Tabs,
  Typography,
  AppBar,
  Tab
} from "@material-ui/core";
import Addresses from "../../common/checkout/Addresses";
import Payment from "../../common/checkout/Payment";
import { addresses, paymentMethods, states } from "../../common/checkout/Test";
import AddressForm from "../../common/checkout/AddressForm";
import OrderSummary from "../../common/checkout/OrderSummary";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      activeTab: 0
    };
  }

  getSteps = () => ["Delivery", "Payment"];
  handleNext = () => this.setState({ activeStep: this.state.activeStep + 1 });
  handleBack = () => this.setState({ activeStep: this.state.activeStep - 1 });
  handleReset = () => this.setState({ activeStep: 0 });
  handleSwitch = (e, v) => {
    this.setState({ activeTab: v });
  };
  getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <AppBar position="static">
              <Tabs value={this.state.value} onChange={this.handleSwitch}>
                <Tab value={0} label="EXISTING ADDRESS" />
                <Tab value={1} label="NEW ADDRESS" />
              </Tabs>
            </AppBar>
            <Box display={this.state.activeTab === 0 ? "block" : "none"}>
              <Addresses addresses={addresses} />
            </Box>
            <Box display={this.state.activeTab === 1 ? "block" : "none"}>
              <AddressForm states={states} />
            </Box>
          </Box>
        );
      case 1:
        return <Payment paymentModes={paymentMethods} />;
      default:
        return "Unknown step";
    }
  };

  render() {
    return (
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        padding="1%"
        margin="1%"
      >
        <Box
          display="block"
          width="70%"
          padding="1%"
          marginLeft="1%"
          marginRight="auto"
          marginTop="2%"
        >
          <Stepper activeStep={this.state.activeStep} orientation="vertical">
            {this.getSteps().map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {this.getStepContent(index)}
                  <Box>
                    <Button
                      disabled={this.state.activeStep === 0}
                      onClick={this.handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                    >
                      {this.state.activeStep === this.getSteps().length - 1
                        ? "Finish"
                        : "Next"}
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {this.state.activeStep === this.getSteps().length ? (
            <Box>
              <Typography variant="body1">
                View the summary and place your order now!
              </Typography>
              <Button onClick={this.handleReset}>CHANGE</Button>
            </Box>
          ) : (
            ""
          )}
        </Box>
        <Box
          display="block"
          width="25%"
          padding="1%"
          marginRight="3%"
          marginLeft="1%"
          marginTop="2%"
        >
          <OrderSummary />
        </Box>
      </Box>
    );
  }
}
