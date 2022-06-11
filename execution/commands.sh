crossdomaind tx cdac send-authenticate-domain cdac channel-0  --from aliceEarth --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind tx cdac send-authenticate-domain cdac channel-1  --from aliceMars --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15


crossdomaind tx cdac send-establish-cooperation  cdac channel-0  "2022-02-03 00:00:00" "2025-02-03 00:00:00" "computing" 200 --from aliceEarth --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind tx cdac send-establish-cooperation  cdac channel-0  "2022-02-03 00:00:00" "2025-02-03 00:00:00" "computing" 200 --from aliceVenus --yes --home ~/.venus --chain-id venus --node tcp://localhost:26663 --gas=auto --gas-adjustment=1.15

############################################
bash execution/globalConfiguration.sh
################
#authentication#
################
#earth-mars
crossdomaind tx cdac send-authenticate-domain cdac channel-0  --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#earth-venus
crossdomaind tx cdac send-authenticate-domain cdac channel-1  --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#earth-neptune
crossdomaind tx cdac send-authenticate-domain cdac channel-2 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#earth-jupiter
crossdomaind tx cdac send-authenticate-domain cdac channel-3  --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

#mars-venus
crossdomaind tx cdac send-authenticate-domain cdac channel-1  --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15
#mars-neptune
crossdomaind tx cdac send-authenticate-domain cdac channel-2 --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15
#mars-jupiter
crossdomaind tx cdac send-authenticate-domain cdac channel-3  --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15


#crossdomaind tx cdac send-authenticate-domain cdac channel-1  --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15
#crossdomaind tx cdac send-authenticate-domain cdac channel-1  --from alice --yes --home ~/.venus --chain-id venus --node tcp://localhost:26663 --gas=auto --gas-adjustment=1.15


crossdomaind query cdac list-domain --node tcp://localhost:26657

crossdomaind query cdac list-authentication-log --node tcp://localhost:26657

#######################
#establish_cooperation#
#######################
#earth-mars
crossdomaind tx cdac send-establish-cooperation  cdac channel-0  "2022-02-03 00:00:00" "2023-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#earth-venus
crossdomaind tx cdac send-establish-cooperation  cdac channel-1  "2022-02-03 00:00:00" "2024-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#earth-neptune
crossdomaind tx cdac send-establish-cooperation  cdac channel-2 "2022-02-03 00:00:00" "2025-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#earth-jupiter
crossdomaind tx cdac send-establish-cooperation  cdac channel-3  "2022-02-03 00:00:00" "2026-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#mars-venus
crossdomaind tx cdac send-establish-cooperation  cdac channel-1  "2022-02-03 00:00:00" "2024-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15
#mars-neptune
crossdomaind tx cdac send-establish-cooperation  cdac channel-2  "2022-02-03 00:00:00" "2025-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15
#mars-jupiter
crossdomaind tx cdac send-establish-cooperation  cdac channel-3  "2022-02-03 00:00:00" "2026-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-domain-cooperation --node tcp://localhost:26657

crossdomaind query cdac list-cooperation-log --node tcp://localhost:26659


#####################
#disable_cooperation#
#####################
#earth-mars
crossdomaind tx cdac send-disable-cooperation  cdac channel-0 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-domain-cooperation --node tcp://localhost:26657
crossdomaind query cdac list-cooperation-log --node tcp://localhost:26659

####################
#enable_cooperation#
####################
#earth-mars
crossdomaind tx cdac send-enable-cooperation  cdac channel-0 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-domain-cooperation --node tcp://localhost:26657

crossdomaind query cdac list-cooperation-log --node tcp://localhost:26659

#########################
#modify-cooperation-cost#
#########################
#earth-mars
crossdomaind tx cdac send-modify-cooperation-cost  cdac channel-0  300 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-domain-cooperation --node tcp://localhost:26659

crossdomaind query cdac list-cooperation-log --node tcp://localhost:26657

#############################
#modify_cooperation_interest#
#############################
#earth-mars
crossdomaind tx cdac send-modify-cooperation-interest  cdac channel-0 finance --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-domain-cooperation --node tcp://localhost:26657

crossdomaind query cdac list-cooperation-log --node tcp://localhost:26659

#############################
#modify_cooperation_validity#
#############################
#earth-mars
crossdomaind tx cdac send-modify-cooperation-validity  cdac channel-0 "2022-01-01 00:00:00" "2026-01-01 00:00:00" --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-domain-cooperation --node tcp://localhost:26657

crossdomaind query cdac list-cooperation-log --node tcp://localhost:26659

####################
#revoke_cooperation#
####################
#earth-mars
crossdomaind tx cdac send-revoke-cooperation  cdac channel-0 --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-domain-cooperation --node tcp://localhost:26657

crossdomaind query cdac list-cooperation-log --node tcp://localhost:26659

##############################
#generate_cooperation_network#
##############################
crossdomaind tx cdac generate-cooperation-network --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-cooperation-network --node tcp://localhost:26657

#############
#############
#############
#############

crossdomaind tx cdaccesscontrol send-forward-cooperation-data  cdaccesscontrol channel-0  --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15


crossdomaind tx cdac send-establish-cooperation  cdac channel-0  "2022-02-03 00:00:00" "2025-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.venus --chain-id venus --node tcp://localhost:26663 --gas=auto --gas-adjustment=1.15


crossdomaind tx cdaccesscontrol send-establish-cooperation  cdaccesscontrol channel-0  "2022-02-03 00:00:00" "2025-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.neptune --chain-id neptune --node tcp://localhost:26670 --gas=auto --gas-adjustment=1.15


crossdomaind tx cdac send-forward-cooperation-data  cdac channel-0   --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15


crossdomaind query cdac list-domain-cooperation --node tcp://localhost:26657

crossdomaind query cdac list-cooperation-log --node tcp://localhost:26659

crossdomaind tx cdaccesscontrol send-revoke-cooperation  cdaccesscontrol channel-0 --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

crossdomaind tx cdaccesscontrol send-revoke-cooperation  cdaccesscontrol channel-1 --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

