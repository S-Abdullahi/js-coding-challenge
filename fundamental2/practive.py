@action(
        methods=["PATCH"],
        detail=True,
        url_path="customer/debt_recovery",
        permission_classes=[IsRetailerUser],
        serializer_class= UpdateDebtRecoverySerializer)   
    def update_customer_debt_recovery(self, request, pk=None):
        """This endpoint for RETAILERS to update customer debt recovery"""
        try:
            customer_order = Order.objects.filter(created_by=request.user, pk=pk).first()
            serializer = UpdateDebtRecoverySerializer(instance=customer_order, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"data": serializer.data,"message":"Debt recovery updated successfully","success": True}, status=status.HTTP_200_OK)
            return Response({"success": False, "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        

class UpdateDebtRecoverySerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('balance_due_date', 'amount_payment')

    def validate(self, attrs):
        due_date = attrs.get('balance_due_date')
        amount_payment = attrs.get('amount_payment')
        
        if due_date is None:
            raise serializers.ValidationError({"due_date": "Due date is required"})
        if due_date is not None:
            if datetime.date.today() > due_date.date():
                raise serializers.ValidationError({"due_date":"Due date cannot be less than today"})
        if isinstance(amount_payment, str):
            raise serializers.ValidationError({"pay_balance":"enter a valid amount"})
        if amount_payment is None:
            raise serializers.ValidationError({"pay_balance":"enter a valid amount"})

        return super().validate(attrs)
    

    def update(self, instance, validated_data):
        instance.balance_due_date = validated_data['balance_due_date']
        instance.amount_payment = validated_data['amount_payment']
        instance.save()
        return instance 