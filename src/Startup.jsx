import { Box, Button, Card, Flex, Input, Stack,Tooltip, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Startup = () => {
    const [isseleect, setisseleect] = useState()
    const [FirstRange, setFirstRange] = useState(8)
    const [SecondRange, setSecondRange] = useState(1)
    const [ThirdRange, setThirdRange] = useState(25000)
    const [costperappoitment, setcostperappoitment] = useState(600)
    useEffect(() => {
        setFirstRange(8)
        if (isseleect == "BusinessConsulting") {
            setcostperappoitment(800)
            setFirstRange(8)
        }
        else if (isseleect == "CPG") {
            setFirstRange(8)
            setcostperappoitment(800)
        }
        else if (isseleect == "Cybersecurity") {
            setFirstRange(8)
            setcostperappoitment(1250)
        }
        else if (isseleect == "DataAnalytics") {
            setFirstRange(8)
            setcostperappoitment(600)
        }
        else if (isseleect == "ELearning") {
            setFirstRange(8)
            setcostperappoitment(500)
        }
        else if (isseleect == "EnvironmentalServices") {
            setFirstRange(8)
            setcostperappoitment(400)
        }
        else if (isseleect == "Events") {
            setFirstRange(10)
            setcostperappoitment(400)
        }
        else if (isseleect == "FintechCrypto") {
            setFirstRange(10)
            setcostperappoitment(500)
        }
        else if (isseleect == "HealthCareSaaS") {
            setFirstRange(10)
            setcostperappoitment(600)
        }
        else if (isseleect == "Insurance") {
            setFirstRange(10)
            setcostperappoitment(800)
        }
        else if (isseleect == "InternetPublishingBroadcasting") {
            setFirstRange(10)
            setcostperappoitment(500)
        }
        else if (isseleect == "LeadershipTraining") {
            setFirstRange(10)
            setcostperappoitment(500)
        }
        else if (isseleect == "LegalServices") {
            setFirstRange(10)
            setcostperappoitment(500)
        }
        else if (isseleect == "Manufacturing") {
            setFirstRange(10)
            setcostperappoitment(500)
        }
        else if (isseleect == "MarketingAdvertising") {
            setFirstRange(10)
            setcostperappoitment(500)
        }
        else if (isseleect == "MediaProductionVideoProduction") {
            setFirstRange(10)
            setcostperappoitment(500)
        }
        else if (isseleect == "Non-Profit") {
            setFirstRange(10)
            setcostperappoitment(300)
        }
        else if (isseleect == "PublicRelationsCommunicationServices") {
            setFirstRange(10)
            setcostperappoitment(500)
        }
        else if (isseleect == "Recruitment(Non IT)") {
            setFirstRange(10)
            setcostperappoitment(600)
        }
        else if (isseleect == "Retail") {
            setFirstRange(10)
            setcostperappoitment(750)
        }
        else if (isseleect == "SaaS") {
            setFirstRange(10)
            setcostperappoitment(600)
        }
        else if (isseleect == "SEO") {
            setFirstRange(10)
            setcostperappoitment(500)
        }
        else if (isseleect == "SoftwareDevelopmentITServicesITConsulting") {
            setFirstRange(10)
            setcostperappoitment(8000)
        }
        else if (isseleect == "TransportationLogistics") {
            setFirstRange(10)
            setcostperappoitment(8000)
        }
    }, [isseleect])
    var FinalSalesPeryear = FirstRange * 12 * ThirdRange * SecondRange / 100;
    var yearlyinvestment = FirstRange * 12 * costperappoitment;
    var ROI = (((((FirstRange * 12) * SecondRange) / 100) * ThirdRange) - (costperappoitment * (FirstRange * 12))) / (costperappoitment * (FirstRange * 12)) * 100
    var Final = Math.round(ROI)
  return (
    <Box color="white" w="100wh" h={{
        lg: "1200px",
        xl: "1200px",
        base: "1600px"
    }} backgroundColor="black" >
        <Flex justify="center" alignItems="center" flexDir="column" >
            <Text fontSize={{
                lg: "60px",
                xl: "60px",
                base: "30px"
            }} fontWeight="bold"   >Appointment Setting</Text>
            <Text fontSize={{
                lg: "60px",
                xl: "60px",
                base: "30px"
            }} fontWeight="bold" bgClip='text' bgGradient='linear(to-r, #019BD7, #00E3BC)'  >ROI Calculator</Text>
            <Text  mt="50px"  >How much income and ROI can you achive with <Box as={"span"} color="#019BD7" >Rifle?</Box></Text>
            <Text  position="relative" bottom="70px" >Use our calculator to get real results we can drive for your bussiness</Text>
        </Flex>

        <Flex mt={{
            base: "400px",
            lg: "150px",
            xl: "150px"
        }} h="100vh" justifyContent="center" alignItems="center"  >

            <Card
            position="relative"
            bottom="50px"
                zIndex="1"
                mt="40px"
                backgroundColor="black" w={{
                    lg: "1200px",
                    xl: "1200px",
                    base: "700px"
                }} h={{
                    base: "1200px",
                    xl: "650px",
                    lg: "650px"
                }} boxShadow="0 0 20px black" >
                <Flex flexDir={{
                    base: "column",
                    xl: "row",
                    lg: "row"
                }} justifyContent="center" gap="20px" alignItems="center" h="100%" >
                    <Stack gap="40px" justifyContent="center" alignItems="center" backgroundColor="black" h="100%" maxW="700px" >
                        <Card w={{
                            base: "300px",
                            lg: "600px",
                            xl: "600px"
                        }} border="4px solid #019BD7" borderRadius="20px" >
                            <Flex flexDir={{
                                base: "column",
                                xl: "row",
                                lg: "row"
                            }} justifyContent="center" alignItems="center" p="10px" gap="10px" >
                                <NavLink to="/" style={({ isActive }) => {
                                    return isActive ? {
                                        background: "linear-gradient(90deg,#019BD7, #00E3BC)",
                                        borderRadius: "10px"
                                    } : {};
                                }}
                                >
                                    <Flex justifyContent="center" alignItems="center" color="black" fontWeight="bold" borderRadius="10px" w="180px" h="45px"  >SMB
                                    </Flex>
                                </NavLink>
                                <NavLink to="/startup" style={({ isActive }) => {
                                    return isActive ? {
                                        background: "linear-gradient(90deg,#019BD7, #00E3BC)",
                                        borderRadius: "10px"
                                    } : {};
                                }}
                                >
                                    <Flex justifyContent="center" alignItems="center" color="black" fontWeight="bold" borderRadius="10px" w="180px" h="45px"  >Startup
                                    </Flex>
                                </NavLink>
                                <NavLink to="/enterprise" style={({ isActive }) => {
                                    return isActive ? {
                                        background: "linear-gradient(90deg,#019BD7, #00E3BC)",
                                        borderRadius: "10px"
                                    } : {};
                                }}
                                >
                                    <Flex justifyContent="center" alignItems="center" color="black" fontWeight="bold" borderRadius="10px" w="180px" h="45px"  >Enterprise
                                    </Flex>
                                </NavLink>
                            </Flex>
                        </Card>
                        <Card py="10px" border="4px solid #0097E6" borderRadius="20px" px="10px" w={{
                            base: "300px",
                            lg: "600px",
                            xl: "600px"
                        }} h="80px">
                            <Text>Your industry</Text>
                            <select   onChange={(e) => setisseleect(e.target.value)} id="categories">
                                <option class="option" value="BankingFinance">Banking & Finance</option>
                                <option class="option" value="BusinessConsulting">Business Consulting</option>
                                <option class="option" value="CPG">CPG</option>
                                <option class="option" value="Cybersecurity">Cybersecurity</option>
                                <option class="option" value="DataAnalytics">Data Analytics</option>
                                <option class="option" value="ELearning">E-Learning</option>
                                <option class="option" value="EnvironmentalServices">Environmental Services</option>
                                <option class="option" value="Events">Events</option>
                                <option class="option" value="FintechCrypto">Fintech & Crypto</option>
                                <option class="option" value="HealthCareSaaS">Health Care SaaS</option>
                                <option class="option" value="Insurance">Insurance</option>
                                <option class="option" value="InternetPublishingBroadcasting">Internet Publishing & Broadcasting	</option>
                                <option class="option" value="LeadershipTraining	">Leadership Training	</option>
                                <option class="option" value="LegalServices">Legal Services</option>
                                <option class="option" value="Manufacturing">Manufacturing</option>
                                <option class="option" value="MarketingAdvertising">Marketing & Advertising	</option>
                                <option class="option" value="MediaProductionVideoProduction">Media Production / Video Production	</option>
                                <option class="option" value="NonProfit">Non-Profit</option>
                                <option class="option" value="PublicRelationsCommunicationServices">Public Relations & Communication Services	</option>
                                <option class="option" value="Recruitment(Non IT)">Recruitment (Non IT)</option>
                                <option class="option" value="Retail">Retail</option>
                                <option class="option" value="SaaS">SaaS</option>
                                <option class="option" value="SEO">SEO</option>
                                <option class="option" value="SoftwareDevelopmentITServicesITConsulting">Software Development / IT Services & IT Consulting</option>
                                <option class="option" value="TransportationLogistics">Transportation & Logistics</option>
                            </select>
                        </Card>
                        <Card py="10px" border="4px solid #0097E6" borderRadius="20px"
                            px="10px" w={{
                                base: "300px",
                                lg: "600px",
                                xl: "600px"
                            }} h="85px" >
                            <Stack h="100%" justifyContent="space-between" alignItems="space-between" >
                                <Text>Average # of monthly appointments</Text>
                                <Text  >{FirstRange}</Text>
                                <Input   name="" id='input'  type="range" min="5" max="100" value={FirstRange} onChange={(e) => setFirstRange(e.target.value)} />
                            </Stack>
                        </Card>
                        <Card py="10px" border="4px solid #0097E6" borderRadius="20px"
                            px="10px" w={{
                                base: "300px",
                                lg: "600px",
                                xl: "600px"
                            }} h="85px" >
                            <Stack h="100%" justifyContent="space-between" alignItems="space-between" >
                                <Flex gap="10px" ><Text>Close ratio (after appointment) %</Text>
                                <Tooltip  borderRadius="10px" placement='top-end' label="To calculate this number, divide the number of sales you made by the number of quotes you sent out." >
                                <img width="20px" height="10px" src="./i.png" alt="" />
                               </Tooltip>
                               </Flex>
                                <Text   >{SecondRange}</Text>
                                <Input   name="" id='input' type="range" min="1" max="100" value={SecondRange} onChange={(e) => setSecondRange(e.target.value)} />
                            </Stack>
                        </Card>
                        <Card py="10px" border="4px solid #0097E6" borderRadius="20px"
                            px="10px" w={{
                                base: "300px",
                                lg: "600px",
                                xl: "600px"
                            }} h="85px" >
                            <Stack h="100%" justifyContent="space-between" alignItems="space-between" >
                                <Flex gap="10px" >
                                <Text>Annual contract value (ACV), $</Text>
                                <Tooltip  borderRadius="10px" placement='top-end' label="The average annual revenue generated from each customer contract, excluding fees." >
                                <img width="20px" height="10px" src="./i.png" alt="" />
                               </Tooltip>
                                </Flex>
                                <Text  bottom="10px"  position="relative"  >{ThirdRange}</Text>
                                <Input   name="" id='input' type="range" min="25000" max="4999000" value={ThirdRange} onChange={(e) => setThirdRange(e.target.value)} />
                            </Stack>
                        </Card>
                    </Stack>
                    <Card mt={{
                        lg: "0px",
                        xl: "0px",
                        base: "50px"
                    }} border="4px solid #0097E6" borderRadius="20px" w="450px"  >
                        <Stack justifyContent="center" alignItems="center" h={{
                            lg: "600px",
                            xl: "600px",
                            base: "650px"
                        }} gap="20px" >
                            <Stack>
                                <Text margin="0" >Your sales per year</Text>
                                <Text  margin="0" fontSize="60px" fontWeight="bold" >${FinalSalesPeryear.toLocaleString()}</Text>
                                <Box as={"div"} w="300px" h="2px" backgroundColor="#AFAFAF" ></Box>
                            </Stack>
                            <Stack>
                              <Flex gap="10px" >
                              <Text>Your yearly investments </Text>
                               <Tooltip  borderRadius="10px" placement='top-end' label="Please note: Investments per Year reflect industry averages. Actual pricing differs based on market, appointment cost, company size, and other factors." >
                                <img width="20px" height="10px" src="./i.png" alt="" />
                               </Tooltip>
                              </Flex>

                                <Text  margin="0" fontSize="60px" fontWeight="bold" >${yearlyinvestment.toLocaleString()}</Text>
                                <Box as={"div"} w="300px" h="2px" backgroundColor="#AFAFAF" ></Box>
                            </Stack>
                            <Stack>
                                <Text margin="0" position="relative" right="70px" >Return on Investment</Text>
                                <Text  margin="0" position="relative" right="70px" fontSize="60px" fontWeight="bold" color="#0097E6" >{Final.toLocaleString()}%</Text>
                            </Stack>
                            <Stack>
                                <Button fontSize="20px" w="327px" h="75px" borderRadius="15px" _hover={{
                                    bgGradient: 'linear(to-r, #019BD7, #00E3BC)'
                                }} bgGradient='linear(to-r, #019BD7, #00E3BC)' color="black" fontWeight="bold"  >Discuss Pricing</Button>
                            </Stack>
                        </Stack>

                    </Card>
                </Flex>
            </Card>
            <Box position="relative"  right="1220px" bottom="430px" >
            <Box position="absolute" mt="50px" display={{
                xl: "block",
                lg: "none",
                base: "none"
            }} >
                <BorderRight>
                    <BorderLeft>
                        <BorderBottom>
                            <BorderTop>
                            </BorderTop>
                        </BorderBottom>
                    </BorderLeft>
                </BorderRight>
            </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default Startup



const BorderTop = styled.div`
    border-image: linear-gradient(90deg,#019BD7, black) ;
    border-top: 5px;
    border-style: solid;
    border-image-slice: 1;
    width: 1250px;
    height: 700px;
   
   
`
const BorderLeft = styled.div`
    border-image: linear-gradient(180deg,#019BD7, black) ;
    border-left: 5px;
    border-style: solid;
    border-image-slice: 1;
    width: 1250px;
    height: 700px;
  ` 
const BorderBottom  =styled.div`
 border-image: linear-gradient(90deg,black, #00E3BC) ;
    border-bottom: 5px;
    border-style: solid;
    border-image-slice: 1;
    width: 1242px;
    height: 700px;

`
const BorderRight  =styled.div`
 border-image: linear-gradient(180deg,black, #00E3BC) ;
    border-right: 5px;
    border-style: solid;
    border-image-slice: 1;
    width: 1250px;
    height: 700px;

`
