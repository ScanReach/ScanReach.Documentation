# Mustering - Keep your crew safe

The mustering functionality is created to help the vessel with their own Mustering training or real world scenarios. The mustering functionality will give the user a quick overview of the location of all personnel and if they have arrived at the registered Muster Stations

## Desktop Components

### Node Admin page

Node Admin show all nodes in a table and where they are placed on the map. This is also where it is possible to set up a node as Muster station and Muster station with muster box

![Node Admin page](mustering-images/node-admin/node-admin-page.png)

#### Node Admin Table

Shows all nodes distrubted between, Nodes located in the map and Nodes not in map.

![Node Admin Table](mustering-images/node-admin/node-admin-table.png)
<br/>

Press the icon to request a new update of the nodes. If a configuration is not as you expect, this can be a good first step to see if the configuration will update
![OWC status refresh](mustering-images/node-admin/owc-status.png)
<br/>

Headings for the different sections showing the number of nodes in each section
![Nodes located in map](mustering-images/node-admin/nodes-located-in-map.png)
<br/>

![Nodes not placed in map](mustering-images/node-admin/nodes-not-in-map.png)
<br/>

Node admin table header
![Node admin table header](mustering-images/node-admin/node-admin-table-headers.png)

- It is possible to sort Node name both decending and acending
- This icon indicates time
- This icon idicates signal strength
  <br/>
  <br/>

![Node admin table item](mustering-images/node-admin/node-admin-table-item.png)

- Staus Icon that show the status of the node
  - ![Node status blue](mustering-images/node-admin/node-status-blue.png)Blue - All is ok
  - ![Node status orange](mustering-images/node-admin/node-status-orange.png) Orange - There is an issue attached to the node
  - ![Node status grey](mustering-images/node-admin/node-status-grey.png) Grey - Node is not placed in map
- "Corridor" - The given name of the node
- "00:12:4b:00:1e:1d:f1:44" - Mac address of the node
- ![Speaker icon](mustering-images/node-admin/speaker-icon.png)A icon to idicate what roles the node has been set to. There will only be one icon show even though the node has more than one role. Click on node to see all the roles a node has. The possible icons are:

  - None
  - ![Root icon](mustering-images/node-admin/root-icon.png)This node is set up as the Root node. This means that this node is the parent node and is connected to the gateway. This is the basis for setting up all other nodes. They will report to this through their own network
  - ![Modbus icon](mustering-images/node-admin/modbus-icon.png) ![Modbus icon orange](mustering-images/node-admin/modbus-icon-orange.png)This node is set up as a Modbus sensor
  - ![Muster icon](mustering-images/node-admin/muster-icon.png) ![Muster icon orange](mustering-images/node-admin/muster-icon-orange.png)This node is set up as a Muster station
  - ![Speaker icon](mustering-images/node-admin/speaker-icon.png) This node is set up as a Alarm node
  - There is two colours a task icon can have:
    - Blue - All is ok
    - Orange configuration is being applied

- "1m" - This is the time since the system last had a report from this node
- ![Signal strengt icon](mustering-images/node-admin/signal-icon.png) This icon indicates how good the signal strength is to the parent node in the mesh network
  <br/>
  <br/>

#### Node Admin Table Item Details

Shows the extended information that is attached to the node
![Node Admin Table item details](mustering-images/node-admin/node-admin-table-selected-node-details.png)

- Node roles shows what the Node is configured as. The possible values here are
  - "This node has no roles"
  - ![Alarm node pill](mustering-images/node-admin/alarm-node-pill.png)
  - ![Muster station node pill](mustering-images/node-admin/muster-station-node-pill.png)
  - ![Muster station with muster box pill](mustering-images/node-admin/muster-station-node-with-muster-box-pill.png) ![Muster station with muster box applying pill](mustering-images/node-admin/muster-station-with-muster-box-applying-pill.png)
  - ![Modbus node pill](mustering-images/node-admin/modbus-node-pill.png) ![Modbus node pill applying](mustering-images/node-admin/modbus-node-pill-applying.png)
  - ![Gangway node pill](mustering-images/node-admin/gangway-node-pill.png)
  - ![Root node pill](mustering-images/node-admin/root-node-pill.png)
  - The orange ones with "Applying" text indicates that the configuration is in the process of being applied. If this status persist, make sure that the correct equipment is connected to the node. Else contact scanreach support and we will help you with the problem.
- Node roles shows what the Node is configured as. The possible values here are

#### Node Details

### Initiate Muster Toggle

#### Start Mustering Pop up

#### Stop Mustering Pop up

### Safety Page

### Searchbar

### Mustering Stats

#### Auto Muster Toggle

##### Auto Muster Toggle Pop up

#### Timer

#### Mustering bar

### Sections

#### Not Accounted For

#### Accounted For

#### Distress Alarms

### Section Items

#### Accpinted for / Not Accounted for Personnel Item

#### Distress alarm Item

#### Searchbar Item

#### Personnel Item

##### During Mustering

###### Manually reigster personnel not Embarked Pop up

##### Normally

#### Node Item

### Node Details List

## Tablet Components

## How too:

### Setting up a Muster Station

### Initiate Muster

### Switch Auto Muster to ON/OFF

### Search for Personnel, Wearables or Nodes

### Manually Register Personnel

### Manually Register Personnel by Search

### Handling Distress Alarms

## FAQ
