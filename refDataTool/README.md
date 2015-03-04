# Reference Data Tool


## Aim 

A webUI to explore reference Data in QRadar, this includes the types which can't be viewed in the interface currently.

For more information on reference data see [here](http://www-01.ibm.com/support/knowledgecenter/SS42VS_7.2.4/com.ibm.qradar.doc_7.2.4/c_qradar_adm_ref_data_collection_overview.html?lang=en)

## Setup

log onto your QRadar **console** via ssh

`cd /opt/qradar/www`

`git clone https://github.com/ibm-security-intelligence/management.git`

then navigate to 

`https://qradar-fqdn-or-ip/manangement/refDataTool`

All links to 3rd party javascript libraries are via CDNs, if your qradar console is not connected to the internet you will need to manually download them and link them in each html file.

## Credits 

This was made by Craig Roberts from IBM QRadar Lab Services, if you need help with your qradar deployment, integration, tuning, incident response or scaling/architecture - you can find my email on the ibm website [http://www.ibm.com/contact/employees/uk/en/](http://www.ibm.com/contact/employees/uk/en/)

## Warranties

These samples are provided for reference purposes on an "as is" basis, and are without warranties of any kind.

Any issues discovered using the samples should not be directed to QRadar support, but be reported on the Github issues tracker.
