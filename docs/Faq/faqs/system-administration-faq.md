# System Administration

This section covers questions about system installation, configuration, and administrative tasks for ScanReach products.

## Installation & Setup

<br>

<details>
<summary>What are the prerequisites for installing ConnectPOB?</summary>
ConnectPOB is designed as a plug-in meant to run on top of an existing Onboard Wireless Connectivity (OWC). Therefore, it's a requirement to have OWC installed and ready before moving on with the installation of ConnectPOB.
</details>

<details>
<summary>What are the basic requirements for installing and running the system?</summary>
The basic requirements for installing and running ConnectPOB are:
<ul>
<li>Connection to the onboard server with UPS backup power</li>
<li>Internet connection for 2-way communication to ScanReach cloud services</li>
<li>Access to integrated resources on the local area network if configured</li>
<li>Internal Wi-Fi access preferably on UPS (tablet is connected to ship Wi-Fi)</li>
<li>Mesh nodes located near power outlets (they run on net power and include backup batteries)</li>
</ul>
</details>

<details>
<summary>How do I set up a node as an Alarm Node?</summary>
To set up a node as an Alarm Node:

<ol>
<li>In the "Manage Nodes" page, select the node you want to set up as an Alarm Node</li>
<li>Make sure this node is physically connected to an alarm box</li>
<li>Toggle "Alarm Node" to YES</li>
<li>Press "CONFIRM"</li>
<li>The node is now set up as an alarm node and the distress alarm box will make sound and blink when there's a new distress alarm</li>
</ol>

</details>

<details>
<summary>How do I set up a Muster Station?</summary>
To set up a Muster Station:
<ol>
<li>On the "Manage Nodes" page, select a node and click "Manage"</li>
<li>Set the "Muster Station" toggle to YES</li>
<li>Select an existing muster station or create a new one</li>
<li>Select under which muster types the station should be active</li>
<li>Add the capacity of the muster station</li>
<li>Set the desired retention level (either by selecting a suggested level or setting a custom level)</li>
<li>Click "Confirm"</li>
<li>The node will now be updated with a new icon and have the role of Muster Station</li>
</ol>
</details>

<details>
<summary>How do I set up a Muster Box?</summary>
To set up a node as a Muster Box:
<ol>
<li>On the "Manage Nodes" page, select a node and click "Manage"</li>
<li>Set the "Muster Station" toggle to YES</li>
<li>Select an existing muster station or create a new one</li>
<li>Toggle "Node is connected to a Muster-box" to YES</li>
<li>Select a default box sensitivity or click "Set Custom" to choose a sensitivity you desire</li>
<li>For Muster Boxes with LED on the front, use a decibel level of minimum -44dB and maximum -50dB</li>
<li>Click "Confirm"</li>
</ol>
Note: It's only possible to set up a node as a muster box from a single node admin.
</details>

<details>
<summary>How do I create node groups?</summary>
To create node groups, you have two options:
<ol>
<li>n the "Manage Nodes" page, select the desired nodes from the map by holding control and clicking the nodes. The "Group nodes" button in the bottom right of the map will increase with the number of selected nodes.</li>
<li>Click the "Group nodes" button and add the desired nodes from a dropdown.</li>
</ol>
Then add a name and optionally a description for the group. This allows you to show combined number of personnel at node groups in the safety page.
</details>

<details>
<summary>What are the prerequisites for installing ConnectFuel?</summary>
ConnectFuel is designed as a plug-in meant to run on top of an existing Onboard Wireless Connectivity (OWC) network. Therefore, it's a requirement to have OWC installed and ready before proceeding with the ConnectFuel installation.
</details>

<details>
<summary>What components are required for ConnectFuel installation?</summary>
The components required for ConnectFuel are:
<ul>
    <li>Modbus Mesh Node with cable for flowmeter</li>
    <li>Flow Computer (records and transmits fuel data to the ConnectFuel system)</li>
    <li>Flowmeter (delivered through partners or connect to existing flowmeters through flow computers with Modbus/Bluetooth)</li>
</ul>
</details>

<details>
<summary>How do I install the mesh node that is connected to the flow computer?</summary>
To install the mesh node:
<ol>
    <li>Start by powering off the flow computer</li>
    <li>Note down the MESH MAC address of the mesh node (listed on the backside of the node)</li>
    <li>Install the mesh node in a suitable location near the flow transmitter</li>
    <li>Connect the Modbus cable from the flow transmitter to the mesh node</li>
    <li>Connect USB power to the Modbus mesh node</li>
    <li>Power on the flow transmitter</li>
</ol>
</details>

<details>
<summary>How do I configure the Modbus node in the system?</summary>
To configure the Modbus node:
<ol>
    <li>Make sure the Modbus nodes are added in the map before proceeding</li>
    <li>Open a browser and enter: https://your-vessel-name.edge.scanreach.com/nodeadmin<ul><li><strong>your-vessel-name</strong> is to be replaced with your vessels name</li></ul></li>
    <li>Place fuel nodes in the map (at location of flow computer cabinet) and name them accordingly</li>
    <li>Review the OWC manual for how to place nodes in the map of the vessel</li>
</ol>
</details>

<details>
<summary>What are the prerequisites for installing the Temperature & Humidity sensors?</summary>
The products and features covered by this user manual are designed as a plug-in meant to run on top of an existing Onboard Wireless Connectivity (OWC). Therefore, it's a requirement to have OWC installed and ready before proceeding with the installation of the Temperature & Humidity sensors.
</details>

<details>
<summary>How do I identify suitable locations for sensors?</summary>
Before installing sensors, consider the following:
<ul>
    <li>Choose locations that represent the environment you want to monitor</li>
    <li>Use sensors that fit the environment (outdoor/indoor)</li>
    <li>Avoid locations with direct sunlight, excessive moisture, or extreme temperatures unless specifically designed for those conditions</li>
    <li>Ensure sensors are within range of the mesh network</li>
</ul>
</details>

<details>
<summary>How do I register sensors in the system?</summary>
To register sensors in the system:
<ol>
    <li>Go to http://your-vessel-domain-name.edge.scanreach.com/connect/sensorconfiguration and log in<ul><li><strong>your-vessel-name</strong> is to be replaced with your vessels name</li></ul></li>
    <li>Click on the "Add configuration" button</li>
    <li>Select Bluetooth from the Configuration type dropdown list</li>
    <li>Choose the correct available configuration (CCM sensor types)</li>
    <li>Find the MAC address by searching for the last four digits</li>
    <li>Click Next</li>
    <li>Add a tag-name that identifies your new sensor configuration</li>
    <li>Optionally provide a description</li>
    <li>Click Save</li>
</ol>
<p>Important: Register one sensor at a time. Do not power on any sensor until expressly mentioned in the manual. Remove battery plastic strips one by one as you add sensors to the system.</p>
</details>

<details>
<summary>How do I place a sensor in the map?</summary>
To place a sensor in the map:
<ol>
    <li>Go to http://your-vessel-domain-name.edge.scanreach.com/connect/sensorconfiguration and log in<ul><li><strong>your-vessel-name</strong> is to be replaced with your vessels name</li></ul></li>
    <li>Click on a configuration to open the details panel</li>
    <li>Click on the "place sensor" button</li>
    <li>A handle will appear in the map</li>
    <li>Drag it to the desired location</li>
    <li>Select a measurement from the dropdown</li>
    <li>Click "save" to confirm</li>
</ol>
</details>

## Configuration

<br>

<details>
<summary>How do I add a sensor configuration?</summary>
To add a sensor configuration:
<ol>
    <li>Open https://your-vessel-name.edge.scanreach.com/connect/sensorconfiguration in a browser<ul><li><strong>your-vessel-name</strong> is to be replaced with your vessels name</li></ul></li>
    <li>Click on the "Add configuration" button</li>
    <li>Choose Modbus from the Configuration type dropdown list</li>
    <li>Select the correct available configuration that you want to configure</li>
    <li>Find the MAC address of the installed sensor by searching for the last four digits</li>
    <li>Verify that the Baudrate and Parity are correct or change them as needed</li>
    <li>Set the correct Modbus server ID and Read interval</li>
    <li>Add a tag-name that identifies your new sensor configuration</li>
    <li>Optionally provide a description</li>
    <li>Click save</li>
</ol>
</details>

<details>
<summary>How do I create a virtual sensor configuration?</summary>
To create a virtual sensor configuration:
<ol>
    <li>Navigate to sensor configuration</li>
    <li>Click "Add configuration"</li>
    <li>Choose Virtual from the Configuration type dropdown list</li>
    <li>Select what type of function you want (Average, Maximum, Minimum, or Custom function)</li>
    <li>Select the datasources you want to use by pressing the edit button</li>
    <li>Set the "Data collection window" (recommended minimum is 2 times the update frequency of the physical sensor)</li>
    <li>Select the measurement name and unit</li>
    <li>Define a unique tag name and optionally add a description</li>
    <li>Press save</li>
</ol>
</details>

<details>
<summary>What is a custom function in virtual sensor configuration?</summary>
A custom function allows you to create dynamic measurements by combining and manipulating data from multiple sensors using mathematical formulas. For example:
<ul>
    <li>Simple function for calculating main engine consumption: "a - b" where a=TotalInlet and b=TotalMain</li>
    <li>Complex example for calculating Wet Bulb Temperature: "temperature * Atan(0.151977 * Sqrt(humidity + 8.313659)) + Atan(temperature + humidity) - Atan(humidity - 1.676331) + 0.00391838 * Pow(humidity, 1.5) * Atan(0.023101 * humidity) - 4.686035"</li>
</ul>
The system supports mathematical operations (+ - / *.) and functions like Abs, Sqrt, Atan, Min, Max.
</details>

<details>
<summary>How do I place a sensor configuration in the map?</summary>
To place a sensor configuration in the map:
<ol>
    <li>Click on a configuration to open the details panel</li>
    <li>Click on the "place sensor" button</li>
    <li>A handle will appear in the map</li>
    <li>Drag it to the desired location</li>
    <li>Select a measurement from the dropdown</li>
    <li>Click "save" to confirm</li>
</ol>
</details>

<details>
<summary>What is the recommended data collection window for virtual sensors?</summary>
The default data collection window is set to 5 minutes. It's recommended to set the data collection window to at least a minimum of 2 times the update frequency of the physical sensor with the longest sensor update frequency. Usually sensors report every 30 or 60 seconds. The format is hours:minutes:seconds (e.g., 00:05:00 for 5 minutes).
</details>

## Bunk Administration

<br>

<details>
<summary>How do I add bunks to the system?</summary>
To add bunks to the system:
<ol>
<li>In the "Bunk admin" page, click the "ADD BUNKS" button in the bottom right corner</li>
<li>In the pop-up window:
   <ol type="a">
   <li>Select how many cabins you want to add and the cabin numbers</li>
   <li>Select how many bunks are in each cabin</li>
   <li>Select what defines the bunks naming (letters or numbers)</li>
   <li>Select primary muster station for this set of bunks</li>
   <li>Select secondary muster station for this set of bunks</li>
   </ol>
</li>
<li>Preview the data in the preview field at the bottom</li>
<li>Click "ADD xxx BUNKS" to confirm</li>
</ol>
</details>

<details>
<summary>Can I assign multiple bunks at once?</summary>
Yes, you can multi-select bunks by selecting one bunk, holding shift, and selecting the last bunk in a line of succeeding bunks to select all bunks in between them as well. When multiple bunks are selected, you can edit their properties collectively, such as changing muster stations for several bunks at a time.
</details>

<details>
<summary>How do I assign a person to a bunk?</summary>
To assign a person to a bunk:
<ol>
<li>In the "people admin" page, search and select the person you want to assign a bunk to</li>
<li>When a person is selected, click "Assign Bunk"</li>
<li>Set the desired dates and select a bunk by clicking the bunk field and finding an available bunk in the dropdown</li>
<li>The bunk's muster stations will be shown, which will override the person's muster stations if they have any assigned already</li>
<li>Click "Confirm" to save the assignment</li>
</ol>
</details>

<details>
<summary>What happens if a Muster station assigned to a bunk is removed?</summary>
If a Muster station assigned to a bunk is no longer a Muster station or is removed, an issue will show on the bunks that have this Muster station assigned. You should take action to handle this by updating the bunk configuration with valid muster stations.
</details>

<details>
<summary>How can I export bunk information?</summary>
There are two ways to export bunk information, in the "Bunk admin" page:
<ol>
<li>"Export Bunks Current State" - This exports a list of all bunks with their current state and resident information based on all bunks or the filtered bunks. The export will be in an Excel file.</li>
<li>"Export Bunks History" - This allows you to export the history of one or more bunks. You can select specific bunks, set a time period, choose export format (Excel or CSV), add a report title, and optionally save the configuration as a template for future use.</li>
</ol>
</details>

## Personnel Administration

<br>

<details>
<summary>What information is needed to locate a person using ConnectPOB?</summary>
For a person to be located by ConnectPOB, three conditions must be met:
<ol>
<li>The person must exist in ConnectPOB</li>
<li>The person must be associated with a wearable</li>
<li>The person must be embarked (checked in to the vessel)</li>
</ol>
</details>

<details>
<summary>How do I register a new person in the system?</summary>
To register a new person, in the "People admin" page:
<ol>
<li>Use the search box to check if the person already exists in the system</li>
<li>If the person doesn't exist, click the "ADD PERSONNEL" button</li>
<li>Enter the person's name, select a role, and add any other required information</li>
<li>Click "Confirm" to add the person to the system</li>
</ol>
</details>

<details>
<summary>How do I assign a wearable to a person?</summary>
To assign a wearable to a person, in the "People admin" page:
<ol>
<li>Search and select the person you want to embark</li>
<li>When a person is selected, click "Assign Wearable"</li>
<li>Find the MAC address on the back of the wearable you want to hand out</li>
<li>Enter the last 4 digits of the MAC address in the search box to find the wearable in the list</li>
<li>Select the wearable from the list
<ul><li>Optionally, activate the toggle to embark the person right away when the wearable is chosen</li></ul></li>

<li>Click to confirm the assignment</li>
</ol>
</details>

<details>
<summary>What is the difference between "Disembark" and "Drop off" functions?</summary>
The "Disembark" function is used when personnel leave the vessel permanently. The person will be reported as "disembarked," but this won't automatically revoke the wearable assigned to them.

The "Drop off" function is used when personnel are leaving the vessel for a short period of time. The person keeps their wearable and gets a "Drop off" state. This allows them to easily check back in when they return without needing a new wearable assignment.

</details>

<details>
<summary>How do I handle personnel synchronized with external crew management systems?</summary>
Personnel can be synchronized with external crew management systems in different ways:
<ul>
<li><strong>ConnectPOB:</strong> The person is created and managed only internally in ConnectPOB</li>
<li><strong>OCS:</strong> The person is created and managed from the external crew management system OCS, but wearable assignment is handled in ConnectPOB</li>
<li><strong>Unisea:</strong> The person is created and managed from the external crew management system Unisea, and wearable assignment is handled in the Unisea system (not in ConnectPOB)</li>
</ul>

Note that "Disembark" is not available if the person is managed by an external system, and "Embark" is also handled by the external system unless the person has a "dropped off" status.

</details>
