# Hardware & Installation

This section covers questions about hardware setup, installation procedures, and physical equipment for ScanReach products.

## Distress Alarm Node

<br>

<details>
<summary>What components are included with the Distress Alarm hardware?</summary>
The Distress Alarm hardware package includes:
<ul>
<li>A digital output node (ScanReach mesh-node with Digital Output support)</li>
<li>A distress alarm box with connecting cable</li>
<li>Velcro strips for mounting</li>
<li>A power supply with USB cable</li>
</ul>
</details>

<details>
<summary>How do I set up the Distress Alarm hardware?</summary>
To set up the Distress Alarm hardware:
<ol>
<li>Find a suitable location on the bridge (or other 24/7 manned areas) that is easily visible and close to a power outlet</li>
<li>Connect the distress alarm box cable to the corresponding end on the mesh node, gently securing the screw locking by hand until you feel resistance</li>
<li>Connect the power supply to the mesh node using the provided USB cable</li>
<li>Power on the hardware by connecting the power supply to the outlet</li>
<li>Note down the MeshNode's MAC address (you'll need it later for registration)</li>
<li>Mount the hardware in the chosen location using the Velcro strips</li>
</ol>
Note: The Distress alarm node should always be connected to an UPS to make sure there is an audible alarm when there is a power outage.
</details>

<details>
<summary>How do I set up the software for the Distress Alarm Node?</summary>
To set up the software for the Distress Alarm Node:
<ol>
<li>Open the ConnectPOB application and navigate to the "Manage Nodes" page</li>
<li>Locate your node in the list by searching for the MAC address you noted down earlier</li>
<li>Select the node, then click "Place" (or "Manage") to open the configuration panel</li>
<li>Give the node an appropriate name</li>
<li>Drag the node to its location on the map</li>
<li>Switch on the "Alarm node" functionality</li>
<li>Click "Confirm" to register the node as connected to an Alarm Unit</li>
<li>Wait a few minutes for the hardware to be correctly set up and ready for testing</li>
</ol>
</details>

<details>
<summary>Why is a Distress Alarm Node recommended over relying solely on a tablet?</summary>
The Distress Alarm hardware is a safer option than relying solely on a tablet because:
<ul>
<li>It doesn't require a steady Wi-Fi connection to function</li>
<li>It doesn't depend on the tablet being powered on and running the application at all times</li>
<li>It comes with a dedicated emitter unit that produces both audible and visible (LED) signals</li>
<li>It provides a more reliable alert mechanism during emergency situations when network connectivity might be compromised</li>
</ul>
</details>

## Clamp on Hardware Installation

<br>

<details>
<summary>What components are required for ConnectFuel with clamp on flowmeter?</summary>
The components required for ConnectFuel with clamp on flowmeter are:
<ul>
    <li>Fuji FSV-2 flowmeter (with ultrasonic sensor, sensor cables, mounting brackets, silicone grease)</li>
    <li>Fuji FSV-2 advanced type flowmeter (with two ultrasonic sensors, sensor cables, mounting brackets, silicone grease)</li>
    <li>Modbus-enabled Mesh node and sensor cable for the flowmeter</li>
</ul>
</details>

<details>
<summary>How do I determine pipe and fluid parameters for the flowmeter?</summary>
To determine pipe and fluid parameters:
<ol>
    <li>Study the P&ID diagrams for the vessel's fuel system and physical installation in the engine room</li>
    <li>Find a suitable place for installation and determine relevant flow parameters:
        <ul>
            <li>Pipe material (e.g., carbon steel)</li>
            <li>Pipe outer diameter and inner diameter (or wall thickness)</li>
            <li>Fluid type (e.g., fuel oil)</li>
        </ul>
    </li>
    <li>Note placement requirements for ultrasonic sensors:
        <ul>
            <li>Minimum 10x pipe diameter after a bend</li>
            <li>Minimum 5x pipe diameter before a bend</li>
            <li>For other obstructions, refer to the ultrasonic sensor user manual</li>
        </ul>
    </li>
    <li>Ensure there's a power source nearby for the flowmeter and mesh node</li>
</ol>
</details>

<details>
<summary>How do I install the flow transmitter?</summary>
To install the flow transmitter:
<ol>
    <li>Mount the flow transmitter in a suitable location using supplied brackets</li>
    <li>Install the sensors on the pipe(s)</li>
    <li>Connect the cables:
        <ul>
            <li>Power (24VDC or 230VAC depending on flowmeter model)</li>
            <li>Sensor cables</li>
            <li>Cables with red band should be used for upstream side of sensor</li>
            <li>Take care to avoid mixing polarity, upstream/downstream sensor, or channels</li>
            <li>Connect Modbus cable for mesh node on RS-485 terminals</li>
        </ul>
    </li>
</ol>
<p>WARNING: The installation must be performed by a certified electrician!</p>
</details>

<details>
<summary>How do I configure the flow transmitter?</summary>
To configure the flow transmitter:
<ol>
    <li>Power on the flow transmitter</li>
    <li>Using the keys on the flow transmitter:
        <ul>
            <li>Disable parameter protection (section 4.4 or 4.5 of Fuji FSV-2 manual)</li>
            <li>Configure flow unit (section 4.8 or 4.11):
                <ul>
                    <li>Use m³/h for flow rate and m³ for total</li>
                </ul>
            </li>
            <li>Configure measurement mode (advanced flowmeter only)</li>
            <li>Enter piping parameters (section 4.6 or 4.9)</li>
            <li>The flowmeter will calculate and display sensor spacing</li>
            <li>Start total mode measurement (section 4.9.2 or 4.12.2)</li>
            <li>Serial settings for communication (section 4.11.6 or 4.15.8):
                <ul>
                    <li>RS-485, 9600 baud rate, even parity, 1 stop bit</li>
                    <li>Station number 01</li>
                    <li>Modbus protocol</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>
<p>Warning: Make sure to completely exit the menus and return to measurement display after configuration. Otherwise, the settings are not stored.</p>
</details>

<details>
<summary>How do I mount sensors to the pipe?</summary>
To mount sensors to the pipe:
<ol>
    <li>Start by powering off the flow transmitter</li>
    <li>Adjust sensor spacing based on the PROCESS SETTING calculated in previous step</li>
    <li>Find a suitable location on the fuel pipe</li>
    <li>Scrape/sand off paint in area where sensors will touch the pipe</li>
    <li>Apply silicone grease to sensor surfaces</li>
    <li>Install sensors with supplied brackets and fasteners</li>
    <li>Connect BNC connectors for sensor cables to sensors</li>
    <li>Take care not to mix up cables for upstream and downstream sensors</li>
</ol>
<p>Note: Sensors should not be mounted on top of the pipeline as air bubbles will disturb flow readings.</p>
</details>
