#!/usr/bin/env bash


terms=(gnome-terminal alacritty terminator konsole kitty st guake tilda tilix xterm yakuake rxvt lxterminal xfce4-terminal terminology)
for t in ${terms[*]}
do
    if [ $(command -v $t) ]
    then
        detected_term=$t
        break
    fi
done
echo $detected_term
