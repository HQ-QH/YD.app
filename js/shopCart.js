$(function() {
	//选择图片切换
	$('#checkbox-img img').click(function() {
		if($(this).attr('src') == 'img/icon_radio3.png') {
			$(this).attr('src', 'img/icon_radio4.png');
			heJia($(this));
		} else {
			$(this).attr('src', 'img/icon_radio3.png');
			heJian($(this));
		}
	})

	$('#jieSuan img').click(function() {
		if($(this).attr('src') == 'img/icon_radio3.png') {
			$(this).attr('src', 'img/icon_radio4.png');
			$('#checkbox-img img').attr('src', 'img/icon_radio4.png');
			zongji();
		} else {
			$(this).attr('src', 'img/icon_radio3.png');
			$('#checkbox-img img').attr('src', 'img/icon_radio3.png');
			$('#heji').text("0.00");
		}
	})
	//加减数量的计算
	/*加号计算*/
	$('.jie-input input').click(function() {
		//判断下标,来确定是点击的加号
		//prev()来获取到上一个同胞元素
		//思路很重要,先获取原来的value(val)值,在来给加,++一定在前才行.
		if($(this).index() == 2) {
			var $sliang = $(this).prev().val();
			$(this).prev().val(++$sliang);
		}
		/*减号计算*/
		//需要重新获取一下,因为vla值已变
		if($(this).index() == 0) {
			var $Newsliang = $(this).next().val();
			if($Newsliang > 1) {
				$(this).next().val(--$Newsliang);
			}
		}
	})

	function heJia(a) {
		var $danjia = parseFloat($(a).parent().next().next().children().next().next().next().children().text().substring(1)).toFixed(2);
		var $shuliang = $(a).parent().next().next().children().next().next().next().children().next().children().next().val();
		var $heji = Number($('#heji').text());
		var $newheji = Number($danjia * $shuliang);
		$('#heji').text(($heji + $newheji).toFixed(2));
	}

	function heJian(b) {
		var $danjia = parseFloat($(b).parent().next().next().children().next().next().next().children().text().substring(1)).toFixed(2);
		var $shuliang = $(b).parent().next().next().children().next().next().next().children().next().children().next().val();
		var $heji = Number($('#heji').text());
		var $newheji = Number($danjia * $shuliang);
		$('#heji').text(($heji - $newheji).toFixed(2));
		if($newheji != $danjia) {
			$('#heji').text("0.00");
		}
	}

	function zongji() {
		//求出每个商品的单价,存为一个伪数组
		var $zdanjia = $('.sp span');
		//求出每个商品的数量,存为一个伪数组
		var $zsL = $('.sL');
		//声明一个变量用于接收
		var $totalPrice = 0;
		/*两个数组进行遍历,要确保数组1的下标0与数组2的下标0,相乘.
		实现:让i=y 就能确保外层循环一次,内层也循环一次,i=y 即是,使循环时外内的下标相等
		在内层加入break 就能执行一次跳出.*/
		for(var i = 0; i < $zdanjia.length; i++) {
				$totalPrice += parseInt(($zdanjia[i].innerText)) * parseInt(($zsL[i].value));
			}
		$('#heji').text($totalPrice.toFixed(2));
	}

})