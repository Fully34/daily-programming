puts "What is your name??"

name = gets.chomp.downcase

if name[1] == "h"
	name2 = name[2..-1]

elsif (name[0] == name[1])
    name2 = name[1..-1]

else
    if (['a', 'e', 'i', 'o', 'u', 'y'].include?(name[0]))
        name2 = name
    else
        name2 = name[1..-1]
    end

    
end

puts "#{name.capitalize}, #{name.capitalize} bo B#{name2},"
puts "Bonana fanna fo F#{name2},"
puts "Fee fy mo M#{name2},"
puts "#{name.capitalize}!"