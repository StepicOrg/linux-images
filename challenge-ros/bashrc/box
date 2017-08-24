PS1='\[\033[01;32m\]\u\[\033[01;33m\]@\[\033[01;32m\]\h: \[\033[01;33m\]\w \[\033[01;35m\]\$ \[\033[00m\]'
alias ls="ls --color=auto"

cd ~/

while read bashrc_script; do
    source "$bashrc_script"
done < <(find /.box/bashrc.d /.box/bashrc.d/box -maxdepth 1 -type f)
