# OWC Installation Manual

## Table of Contents

1. Pre-Installation & Components
2. Installation Step 1: Gateway and Root Node Setup
3. Installation Step 2: Mesh Node Installation
4. Installation Step 3: Verification

## 1. Pre-Installation & Components

### 1.1 System Overview

The OWC system is a wireless mesh network that enables communication throughout your vessel. Before beginning installation, familiarize yourself with the system components and their functions.

### 1.2 Components Overview

#### Installation Box A Contents:

- Gateway Computer
- Root Node
- Tablet (if ConnectPOB is included)
- Deck Box (if applicable)

#### Installation Box B Contents:

- Mesh Nodes (quantity as ordered)
- Power Adapters (fitted to vessel specifications)
- Micro USB Power Cables (10 per box)

### 1.3 Power Requirements

The nodes are powered via their USB port (+5V DC) and use approximately 0.015A of current. Any standard USB "wall charger" can be used, or a 5V supply with a USB cable. The AC/DC power supplies accept an input voltage range of 100-240 VAC.

### 1.4 Node Types

#### IP44 Indoor Nodes

Suitable for indoor use in protected areas.

#### IP67 Outdoor Nodes

Suitable for outdoor use or in areas exposed to water.

### 1.5 Quick Start Guide

[Image: OWC Quick Start Guide showing system overview]

### 1.6 General Arrangement (GA)

Make sure you have received the GA node map. This shows the planned locations for all nodes throughout the vessel. Contact ScanReach support if you need assistance with the GA map.

[Image: General Arrangement (GA) node map example]

## 2. Installation Step 1: Gateway and Root Node Setup

### 2.1 Gateway and Root Node Overview

The gateway is the main communication hub for the OWC system, serving as the core component that runs the required software. The root node is the main node that acts as the anchor point for the node network.

[Image: Gateway Computer and Root Node components]

### 2.2 Gateway and Root Node Setup

1. **Check local network connection** is established through internet access.
2. **Mount the gateway securely** to the server rack (to ensure it won't move in rough seas). Plug in the included power adapter.
3. **Connect the Gateway** to the local area network switch with an Internet connection using the Ethernet Cable. The network should be on a UPS-backed power supply for the ScanReach POB system to work in case of a power outage on board.
4. **Connect a Node** to the Gateway with the included USB data cable. This Node will now act as the Root Node in the OWC mesh nodes network.
5. **Turn the Gateway ON**.
6. **Use any computer** on the admin network on board for this step. Enter the provided URL address (vessel-name.edge.scanreach.com) for the ScanReach dashboard in a Chrome web browser. Note: If not already at hand, obtain your username and password from ScanReach support.

[Image: Gateway and Root Node setup diagram showing connections]

### 2.3 Root Node Placement

The root node should be placed high and outside the server rack, preferably completely clear of any objects nearby to ensure good connectivity.

[Image: Root Node placement example showing optimal position]

### 2.4 Deck Box for Use in Wet Areas

For wet areas, use the IP67 deck box. The locking mechanism on IP67 deck boxes must be tightened properly on all four corners to ensure it is sealed and watertight.

[Image: Deck Box with cable and locking mechanism detail]

## 3. Installation Step 2: Mesh Node Installation

### 3.1 Mesh Node Installation - Software

If you have ordered ConnectPOB, there will be a tablet provided that can be used for this step. If you have ordered ConnectFuel or other solutions, a tablet is not supplied, and you can use your own mobile device.

The network installation software will help you install the nodes around the vessel. The installation device does not need to be online when placing nodes, as it will save data locally and synchronize when connected again.

For big installations, we recommend that the device gets online from time to time to synchronize data during installation. The provided general arrangement (GA) provides a rough guide for the placement of the nodes.

To access the software, visit: vessel-name.edge.scanreach.com

[Image: Mesh node installation software interface]

### 3.2 Mesh Node Installation – Pen and Paper

If you do not have access to a mobile device or tablet, you will have to write down the information and MAC address manually with pen and paper. When you gain access to the software or computer on the same network, the information can then be input manually.

[Image: Example of pen and paper method for recording node information]

Tip: Even with GA printed on A3 paper size, it may be tiny areas to write the MAC. Then it can be done as shown in the image.

### 3.3 Placing Nodes

It's important to start with the location closest to the root node and then the one closest to this node and so on. This ensures that each node can connect to the previous one.

Each node needs to be placed so that it can connect to power outlets. When connected to power, the node will automatically start connecting to the network as indicated by the LED blinking patterns. These can be triggered with the button on the middle of the node:

- **Quick green blinking** = OK
- **Steady pulsating red light** = Over The Air Update (Normal, you can proceed)
- **Quick red blinking** = Trying to connect to mesh network (You can move on to the next node before the green light appears)

[Image: Node LED indicator patterns]

### 3.4 Placing the Node in the Map

1. Press the "Place node" button to engage the QR code scanner.
2. Scan the QR on the back of the node.
3. Label your node to anything practical for its placement.
4. Drag the node placement marker to lock the node's placement.
5. Press "save" when you are happy with its placement.
6. Do this for all the nodes in the GA map.

[Image: Installation software UI showing node placement process]

### 3.5 Placing Nodes – Indoor, Wet Areas, Outdoor

If the node is placed in an exposed area, it should be placed in a deck box.

- **IP44 power supply** is used for wet areas like engine room and galley.
- **IP67 deck box enclosures** are used for nodes on outdoor deck areas.

[Image: Examples of IP44 and IP67 installations in different vessel areas]

## 4. Installation Step 3: Verification

### 4.1 System Verification

Based on the solution that is being installed on the vessel, follow the steps in that solution's installation & user manuals to verify that the installation was successful.

Installation & user manuals for different solutions can be found at www.scanreach.com/support

### 4.2 Network Testing

Together with another person, test the mesh network connection and ensure that the network is functional:

1. One person needs to bring the wearables to the node that is being tested, while another person needs to make sure that the location is being correctly reported back to the onboard management software.
2. If any errors are detected, rearrange the nodes as required.
3. To test; go to the node furthest away from the root node while another person is stationed at a workstation.
4. Test the alarm function on the wearable by pressing the distress button for one or more seconds.
5. The person at the workstation needs to resolve the alert in the onboard management software.
6. When it's verified that the network is working correctly and the nodes are registered, the installation of the network is complete.

### 4.3 Final Checks

Before completing the installation, perform these final checks:

- Verify all nodes are properly powered and showing correct LED status
- Confirm all nodes are correctly placed in the digital map
- Ensure the gateway is properly connected to the network
- Test connectivity between various points in the network
- Document any deviations from the planned installation

### 4.4 Support

If you are in need of further assistance during or after installation, do not hesitate to contact our customer support:

- Phone: +47 414 96 500
- Email: support@scanreach.com

---

## Appendix A: Troubleshooting

### Common Installation Issues

**Node not showing online:**

- Check power connection
- Verify USB cable is properly connected
- Ensure node is within range of another node

**Gateway not connecting to network:**

- Verify Ethernet cable is properly connected
- Check network settings
- Confirm internet connectivity

**Poor signal strength in certain areas:**

- Consider adding additional nodes
- Check for metal obstructions
- Verify node placement according to GA

## Appendix B: Maintenance

### Regular Maintenance

- Periodically check all nodes for proper operation
- Verify LED indicators show correct status
- Ensure deck boxes remain properly sealed
- Check for physical damage to nodes or cables

### System Updates

The OWC system may receive periodic updates. These will be automatically applied when the system has internet connectivity. Nodes will show a steady pulsating red light during updates, which is normal operation.
