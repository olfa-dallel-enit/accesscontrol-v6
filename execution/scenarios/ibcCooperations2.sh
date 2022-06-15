bash execution/globalConfiguration.sh 

#########
#network#
#########
#earth-mars
#earth-venus
#mars-neptune
#mars-jupiter

################
#authentication#
################
#earth-mars
crossdomaind tx cdac send-authenticate-domain cdac channel-0  --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
sleep 5
#earth-venus
crossdomaind tx cdac send-authenticate-domain cdac channel-1  --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
sleep 5
#mars-neptune
crossdomaind tx cdac send-authenticate-domain cdac channel-1 --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15
sleep 5
#mars-jupiter
crossdomaind tx cdac send-authenticate-domain cdac channel-2  --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15
sleep 5
#######################
#establish_cooperation#
#######################
#earth-mars
crossdomaind tx cdac send-establish-cooperation  cdac channel-0  "2022-02-03 00:00:00" "2023-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#earth-venus
crossdomaind tx cdac send-establish-cooperation  cdac channel-1  "2022-02-03 00:00:00" "2024-02-03 00:00:00" "computing" 350 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#mars-neptune
crossdomaind tx cdac send-establish-cooperation  cdac channel-1 "2022-02-03 00:00:00" "2025-02-03 00:00:00" "computing" 150 --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15
#mars-jupiter
crossdomaind tx cdac send-establish-cooperation  cdac channel-2  "2022-02-03 00:00:00" "2026-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-domain-cooperation --node tcp://localhost:26657

crossdomaind query cdac list-cooperation-network --node tcp://localhost:26657

crossdomaind tx cdac generate-cooperation-network --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15


crossdomaind query cdac list-cooperation-network --node tcp://localhost:26659